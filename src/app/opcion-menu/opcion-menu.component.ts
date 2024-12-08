import { Component, Input } from '@angular/core';

@Component({
  selector: 'opcion-menu',
  imports: [],
  templateUrl: './opcion-menu.component.html',
  styleUrl: './opcion-menu.component.scss'
})
export class OpcionMenuComponent {
  @Input() actividad: any;
  fecha!: Date;
  tipo!: string;
  id!: string;
  constructor() {}

   ngOnInit(): void {
    this.id = this.actividad.id;
    this.fecha = this.actividad.fecha;
    this.tipo = this.actividad.tipo;
  }
}
