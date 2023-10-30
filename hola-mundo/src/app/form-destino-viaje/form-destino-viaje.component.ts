import { Component, EventEmitter, Output } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-destino-viaje',
  templateUrl: './form-destino-viaje.component.html',
  styleUrls: ['./form-destino-viaje.component.css']
})
export class FormDestinoViajeComponent {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  fg: FormGroup;
  minLongitud = 3;

  constructor(fb:FormBuilder){
    this.onItemAdded = new EventEmitter();
    this.fg = fb.group({
      nombre: ['', Validators.compose([
        Validators.required,
        this.nombreValidadorParametrizable(this.minLongitud)
      ])],
      url: ['']
    });

    this.fg.valueChanges.subscribe((form:any) => {
      console.log('Cambio de formulario', form);
    });
  }

  guardar(nombre:string, url:string):boolean{
    let d = new DestinoViaje(nombre, url);
    this.onItemAdded.emit(d);
    return false;
  }

  nombreValidator(control:FormControl):{[s:string] : boolean} | null{
    const l = control.value.toString().trim().length;
    if (l > 0 && l < 5){
      return {invalidNombre: true};
    }
    return null;
  }
  nombreValidadorParametrizable(minLong:number) : ValidatorFn{
    return (control:AbstractControl): {[s:string]:boolean} | null => {
      const l = control.value.toString().trim().length;
      if (l > 0 && l < minLong){
        return {minLongNombre: true};
      }
      return null;
    };
  }

}
