export class personas{
    private nombre:string
    private edad:number
    private telefono:number
    private direccion:string
    private ciudad:string

    constructor(nombre:string,edad:number,telefono:number,direccion:string,ciudad:string){
        this.nombre=nombre
        this.edad=edad
        this.telefono=telefono
        this.direccion=direccion
        this.ciudad=ciudad
    }

    public getNombre(){
        return this.nombre
    }
    public getEdad(){
        return this.edad
    }
    public getTelefono(){
        return this.telefono
    }
    public getDireccion(){
        return this.direccion
    }
    public getCiudad(){
        return this.ciudad
    }

    public setNombre(nombre:string){
        this.nombre = nombre
    }
    public setEdad(edad:number){
        this.edad = edad
    }
    public setTelefono(telefono:number){
        this.telefono = telefono
    }
    public setDireccion(direccion:string){
        this.direccion=direccion
    }
    public setCiudad(ciudad:string){
        this.ciudad=ciudad
    }



    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Ciudad: ${this.ciudad}`);
        console.log("------------------------");
    }

    esMayorDeEdad(): boolean {
        return this.edad >= 18;     
    }      
}
