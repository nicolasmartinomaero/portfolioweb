import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadosComponent } from './componentes/encabezados/encabezados.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { PiepaginaComponent } from './componentes/piepagina/piepagina.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadosComponent,
    AcercadeComponent,
    EducacionComponent,
    PiepaginaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
