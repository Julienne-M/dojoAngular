import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TarifsTranspoleComponent } from './tarifs-transpole/tarifs-transpole.component';
import { from } from 'rxjs';
import { TarifsUniquesComponent } from './tarifs-uniques/tarifs-uniques.component';

@NgModule({
  declarations: [
    AppComponent,
    TarifsTranspoleComponent,
    TarifsUniquesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
