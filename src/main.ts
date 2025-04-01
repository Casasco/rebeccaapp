import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Lógica para alterar as variáveis CSS antes de iniciar a aplicação
const dataAtual = new Date().toLocaleDateString('pt-BR'); // Formato YYYY-MM-DD
console.log(dataAtual);

if (dataAtual === '24/03/2025') {
  document.documentElement.style.setProperty('--cor-fundo-principal', 'rgb(12, 188, 12)');
  document.documentElement.style.setProperty('--cor-fundo-secundario', 'rgb(252, 15, 192)');
  document.documentElement.style.setProperty('--cor-texto', 'rgb(252, 15, 192)');
  document.documentElement.style.setProperty('--cor-fundo-botao', 'rgb(12, 188, 12)');
} else {
  // Caso contrário, use os valores padrão
  document.documentElement.style.setProperty('--cor-fundo', '');
  document.documentElement.style.setProperty('--cor-texto', '');
  document.documentElement.style.setProperty('--cor-botao', '');
}

// Inicializa a aplicação Angular
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
