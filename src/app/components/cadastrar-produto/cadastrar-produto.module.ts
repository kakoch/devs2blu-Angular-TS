import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarProdutoComponent } from './cadastrar-produto.component';
import { CadastrarRoutingModule } from './cadastrar-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    CadastrarProdutoComponent
  ],
  imports: [
    CommonModule,
    CadastrarRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgbAlertModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class CadastrarProdutoModule{ }
