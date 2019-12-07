import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ChannelRoom } from '../shared/models/channel-room.model';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit, AfterViewInit {

channelRooms: ChannelRoom[] = [];
directChannels: ChannelRoom[]= [];
@Input() username: string;

// tslint:disable-next-line: align
constructor(private chatService: ChatService) { }

ngOnInit() {
  // Add ChannelRooms
  this.chatService.onChatRoomsAdded().subscribe(msg => {
    console.log('Chat Romm Added: ');
    console.log(msg);
    const matches = msg.channelName.match(/\b(\w)/g); // ['J','S','O','N']
    const acronym = matches.join(''); // JSON

    const roomChannel = {} as ChannelRoom;
    roomChannel.channelName = msg.channelName;
    roomChannel.channelTextLog = acronym;
    roomChannel.createdAt = msg.createdAt;
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
    this.directChannels.push(userChannel);

  });


}
ngAfterViewInit(): void {
  console.log('User Connected to Pushing to all the Screens');
  this.chatService.addConnectedUser(this.username);

}
}
