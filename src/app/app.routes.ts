import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EditComponent } from './edit/edit.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'edit/:id', component: EditComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: '' }
];
