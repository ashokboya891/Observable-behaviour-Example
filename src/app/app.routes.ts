import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'edit/:id', component: EditComponent },
    { path: 'create', component: CreateComponent },
    { path: '**', redirectTo: '' }
];
