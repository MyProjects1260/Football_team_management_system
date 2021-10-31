import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterjoueursComponent } from './consulterjoueurs.component';

describe('ConsulterjoueursComponent', () => {
  let component: ConsulterjoueursComponent;
  let fixture: ComponentFixture<ConsulterjoueursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterjoueursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterjoueursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
