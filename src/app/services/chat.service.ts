import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io(environment.socketAPIUrl);
  }

  onChatRoomsAdded() {
    return Observable.create(observer => {
      this.socket.on('chat-rooms-pushed', msg => {
        observer.next(msg);
      });
    });
  }

  onChatUserAdded(){
    return Observable.create(observer => {
      this.socket.on('user-connected-server', msg => {
        observer.next(msg);
      });
    });
  }

  joinRoom(room, username){
    console.log('Joined Room ' + room);
    this.socket.emit('room', {room, username});
  }

  onGroupMessagesRecieved(){
    return Observable.create(observer => {
      this.socket.on('group-message', msg => {
        observer.next(msg);
      });
    });
  }

  addConnectedUser(username){
    this.socket.emit('user-connected-client', {
      username
    });
  }
}
