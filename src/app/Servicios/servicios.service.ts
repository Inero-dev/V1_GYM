import { Injectable } from '@angular/core';
import {Actividad} from '../modelos/actividad.model'

@Injectable({
  providedIn: 'root'
})
export class Servicios {

  constructor() { }

  actividades: Actividad[] = [
    {
      id: '1',
      fecha: '2023-06-01',
      lugar: 'Estadio de la ciudad',
      monitor: 'Juan Pérez',
      tipo: 'Yoga',
    },
    {
      id: '2',
      fecha: '2023-06-02',
      lugar: 'Parque de la ciudad',
      monitor: 'María García',
      tipo: 'Zumba',
    },
    {
      id: '3',
      fecha: '2023-06-03',
      lugar: 'Parque de la ciudad',
      monitor: 'Pedro López',
      tipo: 'Spinning',
    },
    {
      id: '4',
      fecha: '2023-06-04',
      lugar: 'Parque de la ciudad',
      monitor: 'María García',
      tipo: 'Spinning',
    },
    {
      id: '5',
      fecha: '2023-06-01',
      lugar: 'Estadio de la ciudad',
      monitor: 'Juan Pérez',
      tipo: 'Yoga',
    },
    {
      id: '6',
      fecha: '2023-06-02',
      lugar: 'Parque de la ciudad',
      monitor: 'María García',
      tipo: 'Zumba',
    },
    {
      id: '7',
      fecha: '2023-06-03',
      lugar: 'Parque de la ciudad',
      monitor: 'Pedro López',
      tipo: 'Spinning',
    },
    {
      id: '8',
      fecha: '2023-06-04',
      lugar: 'Parque de la ciudad',
      monitor: 'María García',
      tipo: 'Spinning',
    },
  ];

  public getActividades(){
    return this.actividades;
  }

  public numActividades(){
    return this.actividades.length;
  } 
}
