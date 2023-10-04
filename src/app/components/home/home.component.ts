import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cadProduto : string = 'Cadastrar Produto';
  home : string = 'Inicio';
  public listaTarefas: string[] =['Cozinhas','ler', 'estudar']
  constructor() { }

  ngOnInit(): void {
  }

}
