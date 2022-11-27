import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChineseComponent } from './chinese/chinese.component';
import { RegisterComponent } from './register/register.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {path:"register",component:RegisterComponent},
  {path:"",component:UserLoginComponent},
  {path:"chinese",component:ChineseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
