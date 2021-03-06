import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: './authentication/authentication.module#AuthenticationModule',
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'user',
        loadChildren: './users/users.module#UsersModule',
    },
    {
        path: 'offers',
        loadChildren: './offers/offers.module#OffersModule',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
