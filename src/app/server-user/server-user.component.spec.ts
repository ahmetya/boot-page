import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerUserComponent } from './server-user.component';

describe('ServerUserComponent', () => {
  let component: ServerUserComponent;
  let fixture: ComponentFixture<ServerUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
