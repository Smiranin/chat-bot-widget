import { Component, Input } from '@angular/core';
import { Prompt } from '../../../models/session';

@Component({
  selector: 'cbw-prompts-list',
  templateUrl: './prompts-list.component.html',
  styleUrl: './prompts-list.component.scss',
})
export class PromptsListComponent {
  @Input() prompts: Prompt[] = [];
}
