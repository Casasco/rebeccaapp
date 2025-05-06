import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-calendario',
  imports: [MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, FormsModule, CommonModule, MatCardModule],
  templateUrl: './calendario.component.html',
  styleUrl: './calendario.component.css'
})
export class CalendarioComponent {
  dataSelecionada: Date | null = null;

  constructor(private dataService: DataService) {}
  
  salvarData() {
    console.log('Data selecionada '+ this.dataSelecionada);
    var dataString = this.dataSelecionada?.toLocaleDateString('pt-BR')!;
    console.log('Data string: ' + dataString);
    if (!this.dataSelecionada) {
      alert('❗Selecione uma data antes de salvar.');
      return;
    }

    this.dataService.salvarData(dataString).subscribe({
      next: (res: any) => alert('✅ Data salva com sucesso! ' + dataString),
      error: (err) => alert('❌ Erro ao salvar data: ' + (err.error || 'Erro interno'))
    });
  }
}
