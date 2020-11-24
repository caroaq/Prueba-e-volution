export class EmpCont {
    
        constructor(_id= '', nombreContratista= '', nombreEmpleado='', tiempoTrabajado=0,
         horasFaltantes=0, nombreObra=''){
            this._id=_id;
            this.nombreContratista=nombreContratista;
            this.nombreEmpleado=nombreEmpleado;
            this.tiempoTrabajado=tiempoTrabajado;
            this.horasFaltantes=horasFaltantes;
            this.nombreObra=nombreObra;
    
        }
    
        _id: string;
        nombreContratista: string;
        nombreEmpleado: string;
        tiempoTrabajado: number;
        horasFaltantes: number;
        nombreObra: string;
    
}
