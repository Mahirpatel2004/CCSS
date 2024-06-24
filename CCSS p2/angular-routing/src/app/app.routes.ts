import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { LoginComponent } from './components/login/login.component';
import { InquiryComponent } from './components/inquiry/inquiry.component';

export const routes: Routes = [
    {'path':'home',component:HomeComponent},
    {'path': 'aboutus',component:AboutusComponent},
    {'path':'login',component:LoginComponent},
    {'path':'inquiry',component:InquiryComponent},
    {path:'**',component:HomeComponent}
];
