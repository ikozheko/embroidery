import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlossThreadListComponent } from './floss-thread-list.component';

describe('FlossThreadListComponent', () => {
  let component: FlossThreadListComponent;
  let fixture: ComponentFixture<FlossThreadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlossThreadListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlossThreadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
