import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RowComponent } from './row/row.component';
import { TableHeaderComponent } from './table-header/table-header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RowComponent,
    TableHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
