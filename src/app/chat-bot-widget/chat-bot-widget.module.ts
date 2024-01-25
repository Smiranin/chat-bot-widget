import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatServiceApiService } from './services/chat-service-api.service';
import { ChatBotWidgetComponent } from './chat-bot-widget.component';
import { SessionComponent } from './components/session/session.component';
import { MsgListComponent } from './components/session/msg-list/msg-list.component';
import { PromptsListComponent } from './components/session/prompts-list/prompts-list.component';

@NgModule({
  declarations: [
    ChatBotWidgetComponent,
    SessionComponent,
    MsgListComponent,
    PromptsListComponent,
  ],
  imports: [CommonModule],
  exports: [ChatBotWidgetComponent],
  providers: [ChatServiceApiService],
})
export class ChatBotWidgetModule {}
