import { Routes } from '@angular/router';
import { GameListComponent } from './game-list/game-list.component';
import { provideHttpClient } from '@angular/common/http';

export const routes: Routes = [
    {
        path:'',
        component:GameListComponent
    }
];
