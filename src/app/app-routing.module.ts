import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo: 'signin', pathMatch: 'full'},
  {path:'signup', component: SignupComponent, title: 'Sign Up'},
  {path: 'signin', component: LoginComponent, title: 'Sign In'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
