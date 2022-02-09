import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as signalR from '@microsoft/signalr';

interface Message {
  userName: string,
  text: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  messages: Message[] = [{
    text: 'olá',
    userName: 'Fabi'
  },
  {
    text: 'oii',
    userName: 'Visitante'
  },
  {
    text: 'Iae',
    userName: 'Moacyr'
  }]
  messageControl = new FormControl('');
  userName : string = 'Fabi';

  connection = new signalR.HubConnectionBuilder()

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(){
    
  }

}
