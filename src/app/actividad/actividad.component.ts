import { Component, Input } from '@angular/core';

@Component({
  selector: 'ActividadComponent',
  imports: [],
  templateUrl: './actividad.component.html',
  styleUrl: './actividad.component.scss'
})
export class ActividadComponent {
  
  //actividad:any=input();// este no funciona, y en internet se utiliza el @Input
  @Input() actividad: any;
  id!: string;
  fecha!: Date;
  lugar!: string;
  monitor!: string;
  tipo!: string;
  constructor() {}

   ngOnInit(): void {
    this.id = this.actividad.id;
    this.fecha = this.actividad.fecha;
    this.lugar = this.actividad.lugar;
    this.monitor = this.actividad.monitor;
    this.tipo = this.actividad.tipo;
  }
  
}
