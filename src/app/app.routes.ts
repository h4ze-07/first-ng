import { Routes } from '@angular/router';
import { LayoutComponent } from './common-ui/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            { path: '', component: HomeComponent},
            { path: 'about', component: AboutComponent},
            { path: '**', component: NotFoundComponent}
        ]
    },
    { path: '**', component: NotFoundComponent}
];
