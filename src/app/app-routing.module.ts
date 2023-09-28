import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HomeComponent } from './components/landing-page/home/home.component';
import { PastYearPapersComponent } from './components/landing-page/past-year-papers/past-year-papers.component';
import { SignInComponentComponent } from './sign-in-component/sign-in-component.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [{
      path: "",
      component: HomeComponent
    },{
      path:"past-year-papers",
      component:PastYearPapersComponent
    }]
  }, 
  {
    path:"login",
    component:SignInComponentComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
