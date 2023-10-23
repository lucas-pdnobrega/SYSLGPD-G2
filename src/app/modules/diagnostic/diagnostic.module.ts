import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing/listing.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ListingComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    ListingComponent
  ]
})
export class DiagnosticModule { }
