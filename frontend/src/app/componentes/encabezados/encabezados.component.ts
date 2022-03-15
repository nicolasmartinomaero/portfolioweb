import { Component, OnInit } from '@angular/core';
import { MiportfolioService } from 'src/app/servicios/miportfolio.service';

@Component({
  selector: 'app-encabezados',
  templateUrl: './encabezados.component.html',
  styleUrls: ['./encabezados.component.css']
})
export class EncabezadosComponent implements OnInit {
persona:any;
  usuarioAutenticado:boolean=false;
  constructor(private miServicioDePortfolio:MiportfolioService) { }

  ngOnInit(): void {
    this.miServicioDePortfolio.obtenerDatosPersona().subscribe(data => {
      console.log(data);
      this.persona=data['Persona'];
    });
  }

}
