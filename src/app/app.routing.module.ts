import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/angular/home/home.component';

const routes: Routes = [
    { path: '', redirectTo: '/react/home', pathMatch: 'full' },
    { path: 'react/:page', component: HomeComponent },
    // { path: 'second-component', component: SecondComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

