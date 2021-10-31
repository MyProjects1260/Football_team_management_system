import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierjoueurComponent } from './modifierjoueur.component';

describe('ModifierjoueurComponent', () => {
  let component: ModifierjoueurComponent;
  let fixture: ComponentFixture<ModifierjoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierjoueurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierjoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
