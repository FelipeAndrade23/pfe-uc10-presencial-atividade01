import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../cadastro.model';

@Component({
  selector: 'app-cadastro-delete',
  templateUrl: './cadastro-delete.component.html',
  styleUrls: ['./cadastro-delete.component.css']
})
export class CadastroDeleteComponent implements OnInit {
  cadastro!: Cadastro;

  constructor() {}

  ngOnInit(): void {
  }
  
}
