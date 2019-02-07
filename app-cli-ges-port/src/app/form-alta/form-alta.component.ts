import { Component, OnInit } from '@angular/core';
import { PortfoliosService } from '../portfolios.service'; 

@Component({
  selector: 'app-form-alta',
  templateUrl: './form-alta.component.html',
  styleUrls: ['./form-alta.component.css'],
  providers: [PortfoliosService]
})
export class FormAltaComponent implements OnInit {
  titulo: string; 
  etiqueta_nombre: string; 
  placeholder_nombre: string; 
  nombreIntroducido: string; 
  descripcionIntroducida: string; 
  ficheroIntroducido: string; 
  servPortfolios: PortfoliosService; 

  constructor(sp: PortfoliosService) { 
    this.servPortfolios = sp; 
  }

  ngOnInit() { // Método correspondiente al evento "Al inicializar componente". Es decir, recibe una llamada automática por parte del motor de Angular
    this.titulo = "Alta de portfolios"; 
    this.etiqueta_nombre = "Nombre"; 
    this.placeholder_nombre = "Introduzca nombre y apellidos"; 
  }
  limpiar()
    {
    this.nombreIntroducido = ""; 
    this.descripcionIntroducida=""; 
    this.ficheroIntroducido=""; 
    }
  darDeAlta()
    {
    this.servPortfolios.alta(this.nombreIntroducido, this.descripcionIntroducida, this.ficheroIntroducido); 
    console.log("<<< Se supone que ha dado de alta >>>"); 
    }

}
