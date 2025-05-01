import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaosalvardataComponent } from './botaosalvardata.component';

describe('BotaosalvardataComponent', () => {
  let component: BotaosalvardataComponent;
  let fixture: ComponentFixture<BotaosalvardataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaosalvardataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaosalvardataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
