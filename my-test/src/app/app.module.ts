import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//додаю мову
import { registerLocaleData } from '@angular/common';
import localeUk from '@angular/common/locales/uk';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

//додаю мову(мова не підтримується)
registerLocaleData(localeUk, 'uk');

@NgModule({
  declarations: [
    AppComponent,
     CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule   //для роботи з формами
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
