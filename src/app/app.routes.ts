import { Routes } from '@angular/router';
import { CalendarioComponent } from "./componentes/calendario/calendario.component";
import {AppComponent} from "./app.component"
import { FotoComponent } from './componentes/foto/foto.component';
import { SetarDataComponent } from './componentes/setar-data/setar-data.component';

export const routes: Routes = [
    {path: '', component: FotoComponent},
    {path: 'calendario', component: CalendarioComponent},
    {path: 'setardata', component: SetarDataComponent}  
];
