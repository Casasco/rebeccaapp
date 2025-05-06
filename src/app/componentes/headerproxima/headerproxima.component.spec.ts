import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderproximaComponent } from './headerproxima.component';

describe('HeaderproximaComponent', () => {
  let component: HeaderproximaComponent;
  let fixture: ComponentFixture<HeaderproximaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderproximaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderproximaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
