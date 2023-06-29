import { Component, OnInit } from '@angular/core';
import { ServicService } from 'src/app/servic.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {
  constructor(private service: ServicService) { };
  ngOnInit(): void {

    const storeMessages = localStorage.getItem('messages');
    if (storeMessages) {
      this.messages = JSON.parse(storeMessages);
    }
  }

  message: any;
  messages: any[] = [];
  data:any = [];

  sendMessage() {
    if(this.message == "clear"){
      this.message = '';
      this.messages.splice(0, this.messages.length);
    }
    this.messages.push(this.message);
    this.message = ''; 
    this.SubmitData();
    localStorage.setItem('messages', JSON.stringify(this.messages));
  }

  SubmitData() {
    const lastMassage = this.messages[this.messages.length - 1]
    console.log(lastMassage);
    this.service.chat(lastMassage).subscribe(
      response => {
        console.log('Message sent to backend successfully');

        this.data = response;
        console.log(response);
        // Additional logic after successful message sending
      },
      error => {
        console.error('Failed to send message to backend:', error);
        // Additional error handling
      }
    );
  }

}
