import { Routes } from '@angular/router';

//export const routes: Routes = [];

export const routes: Routes = [
    {
        path: 'app',
        loadComponent: () => import('./app.component').then((m) => m.AppComponent),
    },
    {
        path: 'about',
        loadComponent: () => import('./about/about.component').then((m) => m.AboutComponent),
    },
    // {
    //     path: '',
    //     redirectTo: '/about',
    //     pathMatch: 'full'
    // },
];