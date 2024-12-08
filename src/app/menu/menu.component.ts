import { Component } from '@angular/core';
import {Servicios} from '../Servicios/servicios.service'
import { CommonModule } from '@angular/common';
import {OpcionMenuComponent} from '../opcion-menu/opcion-menu.component'

@Component({
  selector: 'app-menu',
  imports: [CommonModule, OpcionMenuComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  numActividades:number;
  actividades:any[];
  constructor(private servicios:Servicios){
    this.numActividades=this.servicios.numActividades();
    this.actividades=this.servicios.getActividades();
  }
}
