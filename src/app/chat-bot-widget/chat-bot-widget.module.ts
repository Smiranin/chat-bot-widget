import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatServiceApiService } from './services/chat-service-api.service';
import { ChatBotWidgetComponent } from './chat-bot-widget.component';
import { SessionsListComponent } from './components/sessions-list/sessions-list.component';
import { MsgListComponent } from './components/msg-list/msg-list.component';
import { PromptsListComponent } from './components/prompts-list/prompts-list.component';
import { TypedAnimationDirective } from './directives/typed-animation.directive';
import { AutoScrollDirective } from './directives/auto-scroll.directive';

@NgModule({
  declarations: [
    ChatBotWidgetComponent,
    SessionsListComponent,
    MsgListComponent,
    PromptsListComponent,
  ],
  imports: [CommonModule, TypedAnimationDirective, AutoScrollDirective],
  exports: [ChatBotWidgetComponent],
  providers: [ChatServiceApiService],
})
export class ChatBotWidgetModule {}
