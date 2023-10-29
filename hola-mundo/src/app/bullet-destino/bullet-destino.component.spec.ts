import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletDestinoComponent } from './bullet-destino.component';

describe('BulletDestinoComponent', () => {
  let component: BulletDestinoComponent;
  let fixture: ComponentFixture<BulletDestinoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BulletDestinoComponent]
    });
    fixture = TestBed.createComponent(BulletDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
