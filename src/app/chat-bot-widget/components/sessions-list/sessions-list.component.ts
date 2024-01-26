import { Component, OnInit } from '@angular/core';
import { ChatServiceApiService } from '../../services/chat-service-api.service';
import { Prompt, Session } from '../../models/session';

@Component({
  selector: 'cbw-sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrl: './sessions-list.component.scss',
})
export class SessionsListComponent implements OnInit {
  sessions: Session[] = [];
  private initilaSession!: Session;

  constructor(private chatService: ChatServiceApiService) {}

  ngOnInit(): void {
    this.chatService.getInitialSession().subscribe((res) => {
      this.initilaSession = res;
      this.sessions.push(JSON.parse(JSON.stringify(this.initilaSession)));
    });
  }

  selectPrompt(prompt: Prompt): void {
    this.sessions[this.sessions.length - 1].activePrompt = prompt;
    this.chatService
      .generateSessionByPromptId(prompt.id)
      .subscribe((session) => {
        this.sessions.push(session);
      });
  }

  resetSessions(): void {
    this.sessions = [];
    this.sessions.push(JSON.parse(JSON.stringify(this.initilaSession)));
    this.sessions[this.sessions.length - 1].date = new Date();
  }

  showPrompts(): void {
    this.sessions[this.sessions.length - 1].allMessagesShown = true;
  }
}
