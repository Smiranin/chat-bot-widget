import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgListComponent } from './msg-list.component';

describe('MsgListComponent', () => {
  let component: MsgListComponent;
  let fixture: ComponentFixture<MsgListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MsgListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MsgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
