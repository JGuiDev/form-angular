import { Component } from '@angular/core';
import { MessageServiceService } from 'src/app/services/message-service.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
    constructor(public messagesService: MessageServiceService){}
}
