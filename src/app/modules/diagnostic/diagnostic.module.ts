import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing/listing.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    ListingComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    HttpClientModule
  ],
  exports:[
    ListingComponent
  ]
})
export class DiagnosticModule { }
