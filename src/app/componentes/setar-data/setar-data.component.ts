import { Component } from '@angular/core';
import { CalendarioComponent } from '../calendario/calendario.component';
import { BotaosalvardataComponent } from '../botaosalvardata/botaosalvardata.component';

@Component({
  selector: 'app-setar-data',
  imports: [CalendarioComponent, BotaosalvardataComponent],
  templateUrl: './setar-data.component.html',
  styleUrl: './setar-data.component.css'
})
export class SetarDataComponent {

}
