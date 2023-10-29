import { Component, Input } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-bullet-destino',
  templateUrl: './bullet-destino.component.html',
  styleUrls: ['./bullet-destino.component.css']
})
export class BulletDestinoComponent {
  @Input() bull_destino!: DestinoViaje;

}
