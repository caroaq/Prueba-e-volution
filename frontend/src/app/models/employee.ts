export class Employee {
    constructor(_id= '', nombre= '', apellido='', id_empleado='',
    tipoContrato='', fechaNacimiento='', direccion='', telefono='',
    email='', ){
        this._id=_id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.id_empleado=id_empleado;
        this.tipoContrato=tipoContrato;
        this.fechaNacimiento=fechaNacimiento;
        this.direccion=direccion;
        this.telefono=telefono;
        this.email=email;

    }

    _id: string;
    nombre: string;
    apellido: string;
    id_empleado: string;
    tipoContrato: string;
    fechaNacimiento: string;
    direccion: string;
    telefono: string;
    email: string;
}
