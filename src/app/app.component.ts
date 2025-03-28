import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ContainerComponent } from './componentes/container/container.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FotoComponent } from './componentes/foto/foto.component';
import { CalendarioComponent } from "./componentes/calendario/calendario.component";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContainerComponent, HeaderComponent, FotoComponent, CalendarioComponent, MatButtonModule, RouterLink, RouterLinkActive],
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
