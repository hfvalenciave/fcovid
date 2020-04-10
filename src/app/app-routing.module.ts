import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule)
    },
    {
        path: 'challenge',
        loadChildren: () => import('./modules/challenge/challenge.module').then(m => m.ChallengeModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
