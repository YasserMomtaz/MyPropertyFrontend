import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRequestsComponent } from './show-requests.component';

describe('ShowRequestsComponent', () => {
  let component: ShowRequestsComponent;
  let fixture: ComponentFixture<ShowRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowRequestsComponent]
    });
    fixture = TestBed.createComponent(ShowRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
