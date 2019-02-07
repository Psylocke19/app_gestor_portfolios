import { Injectable } from '@angular/core';
import { Portfolio } from './portfolio';

@Injectable()
export class PortfoliosService {
  lista: Array<Portfolio>; 

  constructor() { 
    console.log("<<< CREANDO SERVICIO >>>"); 
    this.lista = new Array<Portfolio>(); 
  }
  public alta (nombre: string, desc: string, fich: string) : void 
    {
    let nuevoPortfolio: Portfolio; 
    nuevoPortfolio = new Portfolio(nombre, desc, fich); 
    this.lista.push(nuevoPortfolio); 

    console.log("<<< ALTA PORTFOLIO: " + nombre + ">>>"); 
    }

  public baja (nombre: string)
    {
    console.log("<<< BAJA PORTFOLIO: " + nombre + ">>>"); 
    }

  public listar(): Array<Portfolio>
    {
    return this.lista; 
    }
}
