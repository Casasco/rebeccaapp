import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetarDataComponent } from './setar-data.component';

describe('SetarDataComponent', () => {
  let component: SetarDataComponent;
  let fixture: ComponentFixture<SetarDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetarDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetarDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
