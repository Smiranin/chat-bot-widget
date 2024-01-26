import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import Typed from 'typed.js';

@Directive({
  selector: '[cbwTypedAnimation]',
  standalone: true,
})
export class TypedAnimationDirective implements AfterViewInit, OnDestroy {
  @Input('cbwTypedAnimation') text!: string;
  @Output() typingCompleted: EventEmitter<void> = new EventEmitter();

  private typedInstance!: Typed;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.typedInstance = new Typed(this.el.nativeElement, {
      strings: [this.text],
      typeSpeed: 15,
      loop: false,
      showCursor: false,
      onComplete: () => this.typingCompleted.emit(),
    });
  }

  ngOnDestroy(): void {
    this.typedInstance.destroy();
  }
}
