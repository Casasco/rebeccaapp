import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaFotoComponent } from './pagina-foto.component';

describe('PaginaFotoComponent', () => {
  let component: PaginaFotoComponent;
  let fixture: ComponentFixture<PaginaFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaFotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
