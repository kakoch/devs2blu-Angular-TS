import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/@core/services/Product.model';
import { ProdutoService } from 'src/app/@core/services/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public listaDeProdutos: ProductModel[] = [];
  cadProduto: string = 'Cadastrar Produto';
  home: string = 'Inicio';
  public listaTarefas: string[] = ['Cozinhas', 'ler', 'estudar']
  constructor(private prodotoService: ProdutoService) { }

  ngOnInit(): void {
    this.prodotoService
      .listAll()
      .subscribe((produtos) => {
        this.listaDeProdutos = produtos

        
      });
  }
}
