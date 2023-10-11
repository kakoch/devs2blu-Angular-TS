import { ServiceModule } from './../../@core/services/service.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ProdutoService } from 'src/app/@core/services/produto.service';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ServiceModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
