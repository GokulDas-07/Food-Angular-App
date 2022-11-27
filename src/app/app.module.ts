import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChineseComponent } from './chinese/chinese.component';
import { SouthIndianComponent } from './south-indian/south-indian.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UserLoginComponent,
    NavbarComponent,
    ChineseComponent,
    SouthIndianComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
