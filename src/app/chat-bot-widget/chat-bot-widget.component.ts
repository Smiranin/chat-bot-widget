import { Component, ViewChild } from '@angular/core';
import { SessionsListComponent } from './components/sessions-list/sessions-list.component';

@Component({
  selector: 'cbw-chat-bot-widget',
  templateUrl: './chat-bot-widget.component.html',
  styleUrl: './chat-bot-widget.component.scss',
})
export class ChatBotWidgetComponent {
  @ViewChild(SessionsListComponent)
  sessionsListRef!: SessionsListComponent;

  title = 'ByteBuddy';

  resetChat(): void {
    this.sessionsListRef.resetSessions();
  }
}
