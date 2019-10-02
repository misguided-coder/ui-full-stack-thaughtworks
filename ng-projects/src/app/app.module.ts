import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

//custom resuable services
import { CalService } from "./cal.service";
import { QuoteSupplierService } from "./quote-supplier.service";
import { QuoteService } from "./quote.service";
import { HindiQuoteService } from "./hindi-quote.service";
import { TimeService } from "./time.service";


import { TeamComponent } from './team.component';
import { CricketComponent } from './cricket.component';
import { CalComponent } from './cal.component';
import { FunComponent } from './fun.component';


@NgModule({
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [
    CalService, 
    QuoteSupplierService,
    QuoteService,
    //{ provide : 'quoteService', useClass:QuoteService},
    { provide : 'quoteService', useClass:HindiQuoteService},
    //TimeService,
    { provide : 'favouriteColor', useValue : 'Black' },
    { provide : 'favouriteFood', useValue : 'Mutton Masala' },
  ],
  declarations: [
    CricketComponent,
    TeamComponent,
    CalComponent,
    FunComponent 
  ],
  bootstrap: [FunComponent]
})
export class AppModule { 
	
}
