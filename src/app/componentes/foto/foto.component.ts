import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-foto',
  imports: [],
  templateUrl: './foto.component.html',
  styleUrl: './foto.component.css'
})
export class FotoComponent {
  fotos: string[] = [];
  imagemSelecionada: string = '';
  indicesEscolhidos: Set<number> = new Set();  // Usando um Set para garantir que os índices não se repitam

  constructor() {
    this.gerarFotos(13);  // Gera 13 imagens, de img1.jpg a img13.jpg
    this.selecionarImagemUnica();  // Chama a função para escolher uma imagem única
  }

  // Função para gerar os nomes das imagens
  gerarFotos(qtdFotos: number): void {
    for (let i = 1; i <= qtdFotos; i++) {
      this.fotos.push('img' + i + '.jpg');
    }
  }

  // Função para selecionar uma imagem única
  selecionarImagemUnica(): void {
    const dataAtual = new Date();
    const dataString = dataAtual.toLocaleDateString("pt-BR");  // Formato: 'yyyy-mm-dd'
    if(dataString === '06/04/2025'){
      this.imagemSelecionada = 'foto_dia06.jpg'
    }
    else{
      // Usando a data atual para gerar uma "semente" para a aleatoriedade
    const seed = parseInt(dataString.replace(/-/g, ''), 10);  // Ex: 20250317 (17 de março de 2025)
    
    // Gerando um índice aleatório baseado na "semente"
    let indiceAleatorio = seed % this.fotos.length;  // Garantindo que o índice está dentro do tamanho do array

    this.indicesEscolhidos.add(indiceAleatorio);
    console.log(this.indicesEscolhidos);
    
    // Verificando se o índice já foi escolhido antes
    while (this.indicesEscolhidos.has(indiceAleatorio)) {
      // Se o índice já foi escolhido, geramos um novo índice baseado em um número diferente
      indiceAleatorio = (indiceAleatorio + 1) % this.fotos.length;
    }
    
    // Se já escolheu todas as imagens, limpa o Set e reinicia o processo
    if (this.indicesEscolhidos.size === this.fotos.length) {
      this.indicesEscolhidos.clear();
    }

    // Atribui a imagem selecionada
    this.imagemSelecionada = this.fotos[indiceAleatorio];
    }
  
  }
}
