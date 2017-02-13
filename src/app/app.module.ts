import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import {CoreModule} from './core/core.module';
import { AppComponent } from './app.component';
import {PatientsService} from './core/patients.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [PatientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
