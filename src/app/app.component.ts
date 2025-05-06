import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ContainerComponent } from './componentes/container/container.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FotoComponent } from './componentes/foto/foto.component';
import { CalendarioComponent } from "./componentes/calendario/calendario.component";
import { MatButtonModule } from '@angular/material/button';
import { DataService } from './services/data.service';
import { HeaderproximaComponent } from './componentes/headerproxima/headerproxima.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContainerComponent, HeaderComponent, FotoComponent, CalendarioComponent, MatButtonModule, RouterLink, RouterLinkActive, HeaderproximaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private renderer: Renderer2) {}
  title = 'apprebecca';
  currentDate!: Date;

  ngOnInit(): void {
    
  }
}
