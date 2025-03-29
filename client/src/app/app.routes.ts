import { Routes } from '@angular/router';
import { CriarProjetoComponent } from './routes/criar-projeto/criar-projeto.component';
import { CriarHabilidadeComponent } from './routes/criar-habilidade/criar-habilidade.component';
import { AppComponent as HomeComponent } from './routes/home/home.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "admin/criar/projeto",
        component: CriarProjetoComponent
    },
    {
        path: "admin/criar/habilidade",
        component: CriarHabilidadeComponent
    }
];
