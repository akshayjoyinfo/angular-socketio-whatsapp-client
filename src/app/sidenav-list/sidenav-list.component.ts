import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ChannelRoom } from '../shared/models/channel-room.model';
import { ChatService } from '../services/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit, AfterViewInit {

channelRooms: ChannelRoom[] = [];
directChannels: ChannelRoom[] = [];
@Input() username: string;

// tslint:disable-next-line: align
constructor(private chatService: ChatService, private router:Router) { }

ngOnInit() {
  // Add ChannelRooms
  this.chatService.onChatRoomsAdded().subscribe(msg => {
    console.log('Chat Romm Added: ');
    console.log(msg);
    const roomChannel = {} as ChannelRoom;
    roomChannel.channelName = msg.channelName;
    roomChannel.channelTextLog = msg.channelName;
    roomChannel.createdAt = msg.createdAt;
    roomChannel.socketId = msg.socketId;
    roomChannel.namespace = msg.channelNameSpace;
    this.channelRooms.push(roomChannel);

  });

  this.chatService.onChatUserAdded().subscribe(msg => {
    console.log('new User Added ');
    console.log(msg);
    const matches = msg.username.match(/\b(\w)/g); // ['J','S','O','N']
    const acronym = matches.join(''); // JSON

    const userChannel = {} as ChannelRoom;
    userChannel.channelName = msg.username;
    userChannel.channelTextLog = acronym;
    userChannel.createdAt = msg.createdAt;
    userChannel.socketId = msg.socketId;
    this.directChannels.push(userChannel);

  });


}

loadChannel(socketId, chatType, isRoom): void {
  console.log(socketId, chatType);

  if (isRoom){
    console.log('User joining Group');
    this.chatService.joinRoom(chatType, this.username);
    this.router.navigate(['chats',
  {
    outlets: { whatsappRouter: [ socketId] } }],
    { state: { socketId , displayName: chatType, isRoom }
  }); // Works
  } else {

    this.router.navigate(['chats',
    { outlets: { whatsappRouter: [ chatType] } }],
    { state: { socketId , displayName: chatType, isRoom }
    });
  }
}
ngAfterViewInit(): void {
  console.log('User Connected to Pushing to all the Screens');
  this.chatService.addConnectedUser(this.username);

}
}
