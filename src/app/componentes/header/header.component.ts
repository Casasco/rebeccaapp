import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  daysRemaining: number = 0;
  mensagemDia: string = 'dias';
  mensagemFalta: string ='Faltam';
  mensagemHeader: string = '';

  ngOnInit(): void {
    this.calculateDaysRemaining();
  }

  calculateDaysRemaining(): void {
    var targetDate = new Date('2025-03-23'); // Data específica
    const currentDate = new Date();
    const currentDateString = currentDate.toLocaleDateString('pt-BR');
    var targetDateString = targetDate.toLocaleDateString('pt-BR');
    
    if(currentDateString === targetDateString){
      this.mensagemHeader = 'Hoje a Rebecca se mudou :(';
      return;
    }
    if(currentDate > targetDate){
      targetDate = new Date('2025-07-25');
      targetDateString = targetDate.toLocaleDateString('pt-BR');
      if(currentDateString === targetDateString){
        this.mensagemHeader = 'Hoje a Rebecca voltou!';
        return;
      }
      const timeDifference = targetDate.getTime() - currentDate.getTime();
      this.daysRemaining = Math.ceil(timeDifference / (1000 * 3600 * 24));
      if(this.daysRemaining == 1){
        this.mensagemDia = 'dia';
        this.mensagemFalta = 'Falta'; 
      }
      this.mensagemHeader = this.mensagemFalta + ' ' + this.daysRemaining + ' ' + this.mensagemDia + ' para a Rebecca voltar!';
    }
    else{
      const timeDifference = targetDate.getTime() - currentDate.getTime();
      this.daysRemaining = Math.ceil(timeDifference / (1000 * 3600 * 24));
      if(this.daysRemaining == 1){
        this.mensagemDia = 'dia';
        this.mensagemFalta = 'Falta'; 
      }
      this.mensagemHeader = this.mensagemFalta + ' ' + this.daysRemaining + ' ' + this.mensagemDia + ' para a Rebecca se mudar :(';
    }
  }
}
