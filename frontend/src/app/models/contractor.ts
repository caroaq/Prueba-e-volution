export class Contractor {
    
    constructor(_id= '', nombre= '', apellido='', id_contratista='',
     fechaNacimiento='', direccion='', telefono='',
    email='', empresa=''){
        this._id=_id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.id_contratista=id_contratista;
        this.fechaNacimiento=fechaNacimiento;
        this.direccion=direccion;
        this.telefono=telefono;
        this.email=email;
        this.empresa=empresa;

    }

    _id: string;
    nombre: string;
    apellido: string;
    id_contratista: string;
    fechaNacimiento: string;
    direccion: string;
    telefono: string;
    email: string;
    empresa: string;
}
