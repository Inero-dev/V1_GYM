import { Component, input } from '@angular/core';

@Component({
  selector: 'actividad_component',
  imports: [],
  templateUrl: './actividad.component.html',
  styleUrl: './actividad.component.scss'
})
export class ActividadComponent {
  
  actividad:any=input();
  fecha:Date=this.actividad().fecha;
  lugar:string=this.actividad().lugar;
  monitor:string=this.actividad().monitor;
  tipo:string=this.actividad().tipo;
}
