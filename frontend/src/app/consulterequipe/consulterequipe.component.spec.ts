import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterequipeComponent } from './consulterequipe.component';

describe('ConsulterequipeComponent', () => {
  let component: ConsulterequipeComponent;
  let fixture: ComponentFixture<ConsulterequipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterequipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterequipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
