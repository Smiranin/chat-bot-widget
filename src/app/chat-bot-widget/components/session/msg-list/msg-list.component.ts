import { Component, Input } from '@angular/core';

@Component({
  selector: 'cbw-msg-list',
  templateUrl: './msg-list.component.html',
  styleUrl: './msg-list.component.scss',
})
export class MsgListComponent {
  @Input() messages: string[] = [];
  @Input() date!: Date;
}
