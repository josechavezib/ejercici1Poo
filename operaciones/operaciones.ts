export class operaciones{
private numero1: number
private numero2: number

constructor(numero1: number, numero2:number){
    this.numero1=numero1
    this.numero2=numero2
}
public getNumero1(){
    return this.numero1
}
public getNumero2(){
    return this.numero2
}

public setNumero1(numero1:number){
    this.numero1=numero1
}
public steNumero2(numero2:number){
    this.numero2=numero2
}

suma():number{
    return this.numero1 + this.numero2
}
resta():number{
    return this.numero1 - this.numero2
}
multi(): number{
    return this.numero1 * this.numero2
}
dividir(): number{
    return this.numero1 / this.numero2
}
//espacio():void{
  //  console.log("------------------------");
//}
}