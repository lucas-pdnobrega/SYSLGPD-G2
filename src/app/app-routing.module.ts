import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/app/modules/diagnostic/header/header.component';
import { ListingComponent } from 'src/app/modules/diagnostic/listing/listing.component';
import { FooterComponent } from 'src/app/modules/diagnostic/footer/footer.component';

const routes: Routes = [
  {
    path:'headerPagina',
    component: HeaderComponent
  },
  {
    path:'listarDocumentos',
    component: ListingComponent
  },
  {
    path:'footerPagina',
    component: FooterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
