import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MiportfolioService } from 'src/app/servicios/miportfolio.service';

@Component({
  selector: 'app-encabezados',
  templateUrl: './encabezados.component.html',
  styleUrls: ['./encabezados.component.css']
})
export class EncabezadosComponent implements OnInit {
persona:any;
  usuarioAutenticado:boolean=true;
  form!:FormGroup;
  constructor(private miServicioDePortfolio:MiportfolioService, private formBuilder:FormBuilder) { 
   this.form=this.formBuilder.group({
    fullName:[' '],
    position:[' '],
    ubication:[' '],
    img:[' ']
   })
  }

  ngOnInit(): void {
    this.miServicioDePortfolio.obtenerDatosPersona().subscribe(data => {
      console.log(data);
      this.persona=data['Persona'];
    });
  }

}
