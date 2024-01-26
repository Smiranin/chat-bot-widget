import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
} from '@angular/core';
import { Subject, debounceTime, takeUntil } from 'rxjs';

@Directive({
  selector: '[cbwAutoScroll]',
  standalone: true,
})
export class AutoScrollDirective implements AfterViewInit, OnDestroy {
  @Input({ required: true }) cbwContentSelector!: string;

  private scrolling$$: Subject<void> = new Subject();
  private resizeObservable!: ResizeObserver;
  private contentContainerEl!: HTMLElement;
  private destroy$ = new Subject<void>();

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    // Use debounceTime for scroll because typing navigation can work too fast.
    this.scrolling$$
      .pipe(debounceTime(100), takeUntil(this.destroy$))
      .subscribe(() =>
        this.contentContainerEl.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        })
      );

    this.addListeners();
  }

  private addListeners(): void {
    this.contentContainerEl = this.el.nativeElement.querySelector(
      this.cbwContentSelector
    );
    if (!this.contentContainerEl)
      return console.error(
        "Can't find element with selector:",
        this.cbwContentSelector
      );

    const parentHeight = (this.el.nativeElement as HTMLElement).offsetHeight;
    this.resizeObservable = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const contentHeight = entry.contentRect.height;
        if (contentHeight > parentHeight) {
          this.scrollToBottom();
        }
      }
    });
    this.resizeObservable.observe(this.contentContainerEl);
  }

  private scrollToBottom(): void {
    this.scrolling$$.next();
  }

  ngOnDestroy(): void {
    this.resizeObservable.unobserve(this.contentContainerEl);
    this.resizeObservable.disconnect();
    this.destroy$.next();
    this.destroy$.complete();
  }
}
