import { Component } from '@angular/core';
import { formulario } from '../app/models/form.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uf2';
  element = true;
  usuarioEditado: formulario | null = null;
  usuaris: formulario[];
  constructor() {
    const usuarisJSON: string = `{
      "usuaris": [
        {"nombre":"Jesus","apellido":"Castro","edat":20,"foto":"https://picsum.photos/300/200","descripcion":"","correo":"","password":"123456789","confirmarpassword":"123456789"},
        {"nombre":"Grober","apellido":"La fuente","edat":20,"foto":"https://picsum.photos/300/200","descripcion":"","correo":"","password":"123456789","confirmarpassword":"123456789"}
        ]
    }`;

    const usuariosDict: any = JSON.parse(usuarisJSON);
    this.usuaris = usuariosDict['usuaris'];
    console.log(this.usuaris);
  }
  showData(): void {
    this.element = true;
  }

  hideData(usuari: formulario | null) {
    this.usuarioEditado = usuari;
    this.element = false;
    console.log(this.element);
  }

  crear(crea: formulario) {
    this.usuaris.push(crea);
    this.showData();
  }
}
