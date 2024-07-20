import { ComponentFixture, TestBed } from '@angular/core/testing';

import { USERSIDEComponent } from './userside.component';

describe('USERSIDEComponent', () => {
  let component: USERSIDEComponent;
  let fixture: ComponentFixture<USERSIDEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [USERSIDEComponent]
    });
    fixture = TestBed.createComponent(USERSIDEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
