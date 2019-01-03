import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css', '../app.component.css']
})
export class MessageComponent implements OnInit {

  constructor() { }
  message = "¡Suerte en tu viaje a Munich!";
  emoji = '🍀';
  ngOnInit() {

  }

}
