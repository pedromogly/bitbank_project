import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTesteComponent } from './app-teste/app-teste.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { AcrossPush } from './across/across.component';

@NgModule({
  declarations: [
    AppComponent,
    TransferenciaComponent,
    AcrossPush,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
