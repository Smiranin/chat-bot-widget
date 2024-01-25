import { Component } from '@angular/core';
import { ChatBotWidgetModule } from './chat-bot-widget/chat-bot-widget.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChatBotWidgetModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
