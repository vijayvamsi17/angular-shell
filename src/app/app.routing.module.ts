import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/angular/home/home.component';
import { ReactAppComponent } from './components/angular/react-app-component/react-app-component.component';

const routes: Routes = [
    { path: '', redirectTo: '/react/first', pathMatch: 'full' },
    // { path: 'react/*', redirectTo: '/react/first' },
    { path: 'react/:page', component: ReactAppComponent },
    // { path: 'reactapp', component: ReactAppComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

