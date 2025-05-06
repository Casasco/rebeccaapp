import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-headerproxima',
  imports: [],
  templateUrl: './headerproxima.component.html',
  styleUrl: './headerproxima.component.css'
})
export class HeaderproximaComponent {
  proximaData: string | null = null;
  mensagemHeader: string | null = null;
  mensagemDia: string = 'dias';
  mensagemFalta: string ='Faltam';
  daysRemaining: number = 0;

  constructor(private dataService: DataService) {}

  ngOnInit(): void{
    this.buscarData();
  }

  buscarData(): void{
    this.dataService.getData().subscribe({
      next: (res) => {
        const dataFormatada = this.formatarParaISO(res.data);
        this.proximaData = dataFormatada;
        console.log('✅ Data recebida do backend: ', this.proximaData);
        const [ano, mes, dia] = this.proximaData.split('-').map(Number);
        var targetDate = new Date(ano, mes - 1, dia);
        console.log('data targetDate:' + targetDate);
        var targetDateString = targetDate.toLocaleDateString('pt-BR')
        const currentDate = new Date();
        const currentDateString = currentDate.toLocaleDateString('pt-BR');
        console.log('data: ' + currentDateString);
        console.log('data: ' + targetDateString);
        const timeDifference = targetDate.getTime() - currentDate.getTime();
        this.daysRemaining = Math.ceil(timeDifference / (1000 * 3600 * 24));
        console.log('days remaining: ' + this.daysRemaining);
        if(this.daysRemaining == 1){
          this.mensagemDia = 'dia';
          this.mensagemFalta = 'Falta';
          this.mensagemHeader = this.mensagemFalta + ' ' + this.daysRemaining + ' ' + this.mensagemDia + ' para ficarmos juntos!';
        }
        else if(this.daysRemaining < 0){
          this.mensagemHeader = "Adicione uma nova data!";
        }
        else if(this.daysRemaining == 0){
          this.mensagemHeader = "Estamos juntos!"
        }
        else{
          this.mensagemHeader = this.mensagemFalta + ' ' + this.daysRemaining + ' ' + this.mensagemDia + ' para ficarmos juntos!';
        }
        
      },
      error: (err) => {
        console.error('❌ Erro ao buscar data: ', err);
      }
    });
  }
  formatarParaISO(data: string): string {
    const [dia, mes, ano] = data.split('/');
    return `${ano}-${mes}-${dia}`; // yyyy-MM-dd
  }

}
