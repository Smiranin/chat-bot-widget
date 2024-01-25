import { Component, OnInit } from '@angular/core';
import { ChatServiceApiService } from '../../services/chat-service-api.service';
import { Session } from '../../models/session';

@Component({
  selector: 'cbw-session',
  templateUrl: './session.component.html',
  styleUrl: './session.component.scss',
})
export class SessionComponent implements OnInit {
  sessions: Session[] = [];
  private initilaSession!: Session;

  constructor(private chatService: ChatServiceApiService) {}

  ngOnInit(): void {
    this.chatService.getInitialSession().subscribe((res) => {
      this.initilaSession = JSON.parse(JSON.stringify(res));
      this.sessions.push(res);
    });
  }
}
