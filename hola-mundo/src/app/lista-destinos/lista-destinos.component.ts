import { Component } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';
import { BulletDestinoComponent } from '../bullet-destino/bullet-destino.component';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent {
  destinos: DestinoViaje[];
  bulletsDestinos: DestinoViaje[];
  constructor(){
    this.destinos = [];
    this.bulletsDestinos = [];
  }

  guardar(nombre:string, url:string):boolean{
    //console.log(`nombre: ${nombre}, url: ${url}`);
    let nuevo_destino = new DestinoViaje(nombre,url);
    console.log(nuevo_destino);
    this.destinos.push(nuevo_destino);
    this.bulletsDestinos.push(nuevo_destino);
    return false;
  }

}
