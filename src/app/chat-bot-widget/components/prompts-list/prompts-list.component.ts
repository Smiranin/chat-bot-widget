import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Prompt } from '../../models/session';

@Component({
  selector: 'cbw-prompts-list',
  templateUrl: './prompts-list.component.html',
  styleUrl: './prompts-list.component.scss',
})
export class PromptsListComponent {
  @Input({ required: true }) prompts: Prompt[] = [];
  @Output() selected: EventEmitter<Prompt> = new EventEmitter();

  selectPrompt(prompt: Prompt): void {
    this.selected.emit(prompt);
  }
}
