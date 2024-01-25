import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBotWidgetComponent } from './chat-bot-widget.component';

describe('ChatBotWidgetComponent', () => {
  let component: ChatBotWidgetComponent;
  let fixture: ComponentFixture<ChatBotWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatBotWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatBotWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
