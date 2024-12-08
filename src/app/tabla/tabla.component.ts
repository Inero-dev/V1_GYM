import { Component } from '@angular/core';
import {Servicios} from '../Servicios/servicios.service'
import {ActividadComponent} from '../actividad/actividad.component'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tabla',
  imports: [ActividadComponent, CommonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.scss'
})
export class TablaComponent {
  
  numActividades:number;
  actividades:any[];
  constructor(private servicios:Servicios){
    this.numActividades=this.servicios.numActividades();
    this.actividades=this.servicios.getActividades();
  }

  
  
}
