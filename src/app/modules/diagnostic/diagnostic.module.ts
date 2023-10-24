import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing/listing.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    ListingComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    HttpClientModule
  ],
  exports:[
    ListingComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class DiagnosticModule { }
