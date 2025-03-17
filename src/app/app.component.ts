import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './componentes/container/container.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FotoComponent } from './componentes/foto/foto.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContainerComponent, HeaderComponent, FotoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apprebecca';
  currentDate!: Date;

  ngOnInit(): void {
    this.pegaDataAtual();
  }
  
  pegaDataAtual(): void {
    this.currentDate = new Date();
  }
}
