import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificaitonTileComponent } from './notificaiton-tile.component';

describe('NotificaitonTileComponent', () => {
  let component: NotificaitonTileComponent;
  let fixture: ComponentFixture<NotificaitonTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificaitonTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificaitonTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
