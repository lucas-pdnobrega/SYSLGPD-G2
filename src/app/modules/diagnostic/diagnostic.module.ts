import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing/listing.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    ListingComponent,
    FooterComponent,
    HeaderComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    HttpClientModule
  ],
  exports:[
    ListingComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class DiagnosticModule { }
