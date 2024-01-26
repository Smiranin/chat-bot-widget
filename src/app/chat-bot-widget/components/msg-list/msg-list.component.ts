import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'cbw-msg-list',
  templateUrl: './msg-list.component.html',
  styleUrl: './msg-list.component.scss',
})
export class MsgListComponent implements OnChanges {
  @Input() messages!: string[];
  @Input() date: Date = new Date();
  @Output() allMessagesShown: EventEmitter<void> = new EventEmitter();

  activeMessages: string[] = [];
  private currentIndex = 0;

  ngOnChanges(): void {
    this.currentIndex = 0;
    this.activeMessages = [];
    this.runNextAnimation();
  }

  runNextAnimation(): void {
    if (this.messages[this.currentIndex]) {
      this.activeMessages.push(this.messages[this.currentIndex]);
      this.currentIndex++;
    } else {
      this.allMessagesShown.emit();
    }
  }
}
