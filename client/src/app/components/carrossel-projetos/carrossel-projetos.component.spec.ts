import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosselProjetosComponent } from './carrossel-projetos.component';

describe('CarrosselProjetosComponent', () => {
  let component: CarrosselProjetosComponent;
  let fixture: ComponentFixture<CarrosselProjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosselProjetosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrosselProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
