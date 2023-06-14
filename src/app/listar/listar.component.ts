import { Component, Input, OnInit } from '@angular/core';
import { formulario } from '../models/form.model'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit  {
  @Input() usuari :formulario;

  constructor() {
    this.usuari = {
      nombre: "",
      apellido: "",
      edat: 0,
      foto: "",
      descripcion: "",
      correo: "",
      password: "",
      confirmarpassword: ""
    };
  }
  ngOnInit(): void {
  }
}
