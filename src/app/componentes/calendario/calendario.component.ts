import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { BotaosalvardataComponent } from '../botaosalvardata/botaosalvardata.component';

@Component({
  selector: 'app-calendario',
  imports: [MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, FormsModule, CommonModule, MatCardModule, BotaosalvardataComponent],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.css'
})
export class CalendarioComponent {
  dataSelecionada: Date | null = null;
}
