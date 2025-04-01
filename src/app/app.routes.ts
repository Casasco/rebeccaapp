import { Routes } from '@angular/router';
import { CalendarioComponent } from "./componentes/calendario/calendario.component";
import {AppComponent} from "./app.component"
import { FotoComponent } from './componentes/foto/foto.component';

export const routes: Routes = [
    {path: '', component: FotoComponent},
    { path: 'calendario', component: CalendarioComponent }
];
