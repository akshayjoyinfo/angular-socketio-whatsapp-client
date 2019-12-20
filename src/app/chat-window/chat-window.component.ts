import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../services/chat.service';
import { Message } from '../shared/models/message.model';


@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
  socketId: string;
  displayName: string;
  isRoom: boolean;
  recievedMessages: Message[]= [];
  sentMessages: Message[]=[];
  constructor(private chatService: ChatService, private router: Router) {
    this.socketId = this.router.getCurrentNavigation().extras.state.socketId;
    this.displayName = this.router.getCurrentNavigation().extras.state.displayName;
    this.isRoom = this.router.getCurrentNavigation().extras.state.isRoom;
   }

  ngOnInit() {
    console.log(this.displayName);
    console.log(this.socketId);
    console.log(this.isRoom);

    this.chatService.onGroupMessagesRecieved().subscribe(msg => {
      console.log('Group Message Recieved ');
      console.log(msg);
      if(this.displayName === msg.room)
      {
      const message = {} as Message;
      message.from = msg.from;
      message.time = msg.time;
      message.message = msg.text;
      this.recievedMessages.push(message);
      }
    });

  }

}
