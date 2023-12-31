import { Component, EventEmitter, Output } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';
import { DestinosApiClient } from '../models/destinos-api-client.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;

  constructor( public destinosApiClient:DestinosApiClient){
    this.onItemAdded = new EventEmitter();
  }

  agregado(d:DestinoViaje){
    //console.log(`nombre: ${nombre}, url: ${url}`);
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);

  }

  elegido(e: DestinoViaje){
    this.destinosApiClient.getAll().forEach( x => x.setSelected(false));
    e.setSelected(true);
  }

}
