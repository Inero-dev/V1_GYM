export class Actividad {
    id: string;
    fecha: string;
    lugar: string;
    monitor: string;
    tipo: string;

    public constructor(id: string, fecha: string, lugar: string, monitor: string, tipo: string) {
        this.id = id;
        this.fecha = fecha;
        this.lugar = lugar;
        this.monitor = monitor;
        this.tipo = tipo;
    }
}