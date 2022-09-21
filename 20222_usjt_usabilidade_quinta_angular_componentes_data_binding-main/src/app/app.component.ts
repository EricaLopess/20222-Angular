import { Component } from "@angular/core";

@Component
({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  })
  export class AppComponent
   {
   nome: any;
    alterarNome(nome: any) 
      {
      console.log(nome);
      this.nome = nome;
      }
    adicionar(nomeInput:any) 
    {
    console.log("Adicionando...");
    }
  }