import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAccountComponent } from './ajouter-account.component';

describe('AjouterAccountComponent', () => {
  let component: AjouterAccountComponent;
  let fixture: ComponentFixture<AjouterAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterAccountComponent]
    });
    fixture = TestBed.createComponent(AjouterAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
