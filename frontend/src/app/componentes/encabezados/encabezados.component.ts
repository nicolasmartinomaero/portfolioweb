import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

import { MiportfolioService } from 'src/app/servicios/miportfolio.service';

@Component({
  selector: 'app-encabezados',
  templateUrl: './encabezados.component.html',
  styleUrls: ['./encabezados.component.css'],
})
export class EncabezadosComponent implements OnInit {
  persona: any;
  usuarioAutenticado: boolean = true;
  form!: FormGroup;
  constructor(
    private miServicioDePortfolio: MiportfolioService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      fullName: [' ', [Validators.required]],
      position: [' ', [Validators.required]],
      ubication: [' ', [Validators.required]],
      img: [' ', [Validators.required, Validators.pattern('http')]],
    });
  }

  ngOnInit(): void {
    this.miServicioDePortfolio.obtenerDatosPersona().subscribe((data) => {
      console.log(data);
      this.persona = data['Persona'];
    });
  }
  guardarEncabezado(){
    if(this.form.valid)
    {
      // llama a un servicio
    }
    else {
      alert("Hay campos incompletos o no validos")
    }
  }
  get fullName(){
    return this.form.get("fullName");
  }
  get position(){
    return this.form.get("position");
  }
  get ubication(){
    return this.form.get("ubication");
  }
  get img(){
    return this.form.get("img")
  }
}
