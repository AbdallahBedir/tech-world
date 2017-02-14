import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import {CoreModule} from './core/core.module';
import { AppComponent } from './app.component';
import {PatientsService} from './core/patients.service';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {AuthService} from './core/auth.service';
import {LoggedInGuard} from './core/LoggedInGuard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CoreModule,
    MaterialModule.forRoot()
  ],
  providers: [PatientsService,AuthService,LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
