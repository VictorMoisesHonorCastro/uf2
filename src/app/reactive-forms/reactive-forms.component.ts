import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { formulario } from '../models/form.model';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  @Input() usuari: formulario | null = null;

  @Output() nuevo: EventEmitter<formulario> = new EventEmitter<formulario>();

  formulario: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    edat: new FormControl('' , [Validators.required]),
    foto: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmarpassword: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    if (this.usuari) {
      this.formulario.setValue({
        nombre: this.usuari?.nombre,
        apellido: this.usuari?.apellido,
        edat: this.usuari?.edat,
        foto: this.usuari?.foto,
        descripcion: this.usuari?.descripcion,
        correo: this.usuari?.correo,
        password: this.usuari?.password,
        confirmarpassword: this.usuari?.confirmarpassword,
      });
    }
  }

  onSubmit() {
    let usuaris: formulario = {
      nombre: this.formulario.value.nom,
      apellido: this.formulario.value.apellido,
      edat: this.formulario.value.edat,
      foto: this.formulario.value.foto,
      descripcion: this.formulario.value.descripcion,
      correo: this.formulario.value.correo,
      password: this.formulario.value.password,
      confirmarpassword: this.formulario.value.confirmarpassword,
    };

    this.nuevo.emit(usuaris);
  }


  /*editar():void{
    this.router.navigate(['editar']);
  }*/
}
