import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Persona } from 'src/app/entidades/persona';

import { MiportfolioService } from 'src/app/servicios/persona.service';

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
      img: [' ', [Validators.required, Validators.pattern('https?://.+')]],
    });
  }

  ngOnInit(): void {
    this.miServicioDePortfolio.obtenerDatosPersona().subscribe((data) => {
      console.log(data);
      this.persona = data['Persona'];
    });
  }
  guardarEncabezado() {
    if (this.form.valid) {
      document.getElementById("cerrarEncabezadoModal")?.click();
      let personaEditar = new Persona(this.form.controls["fullName"].value, this.form.controls["position"].value,
      this.form.controls["ubication"].value, this.form.controls["img"].value);
      this.miServicioDePortfolio.editarDatosPersona(personaEditar).subscribe(data => {
      this.persona = personaEditar;
      this.form.reset();
      },
        error => {
          alert("Ups, no se pudo actualizar. Por  favor, intente nuevamente y/o contacte al administrador.");
        });
    }
    else {
      this.form.markAllAsTouched();
      alert("Hay campos incompletos o no validos");
    }
  }
  mostrarDatosEncabezado(){
    this.form.get("fullName")?.setValue(this.persona.fullName);
    this.form.get("position")?.setValue(this.persona.position);
    this.form.get("ubication")?.setValue(this.persona.ubication);
    this.form.get("img")?.setValue(this.persona.image);
  }
  get fullName() {
    return this.form.get("fullName");
  }
  get position() {
    return this.form.get("position");
  }
  get ubication() {
    return this.form.get("ubication");
  }
  get img() {
    return this.form.get("img")
  }
}
