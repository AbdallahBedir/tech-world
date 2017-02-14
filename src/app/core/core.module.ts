import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [CoreComponent, HeaderComponent, SidebarComponent,
                 LoginComponent, NotAllowedComponent],
  exports:[ HeaderComponent, SidebarComponent,CoreComponent,LoginComponent]
})
export class CoreModule {

 }
