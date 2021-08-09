import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuildsComponent } from './guilds/guilds.component';
import { RegistrationUserComponent } from './registration-user/registration-user.component';

@NgModule({
  declarations: [
    AppComponent,
    GuildsComponent,
    RegistrationUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
