import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Servicios {

  constructor() { }

  actividades = [
    {
      "fecha": "2023-06-01",
      "lugar": "Estadio de la ciudad",
      "monitor": "Juan Pérez",
      "tipo": "Yoga"
    },
    {
      "fecha": "2023-06-02",
      "lugar": "Parque de la ciudad",
      "monitor": "María García",
      "tipo": "Zumba"
    },
    {
      "fecha": "2023-06-03",
      "lugar": "Parque de la ciudad",
      "monitor": "Pedro López",
      "tipo": "Spinning"
    },
    {
      "fecha": "2023-06-04",
      "lugar": "Parque de la ciudad",
      "monitor": "María García",
      "tipo": "Spinning"
    }
  ];

  public getActividades(){
    return this.actividades;
  }

  public numActividades(){
    return this.actividades.length;
  } 
}
