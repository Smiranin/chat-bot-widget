import { Component } from '@angular/core';
import { ChatBotWidgetComponent } from './chat-bot-widget/chat-bot-widget.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChatBotWidgetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
