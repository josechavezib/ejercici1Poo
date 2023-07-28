export class cuenta{

private titular:string
private valoractual:number

constructor(titular:string, valoractual:number){
    this.titular=titular
    this.valoractual=valoractual
}

public getTitular(){
    return this.titular
}
public getValoractual(){
    return this.getValoractual
}

public setTitular(titular:string){
    this.titular=titular
}
public setValoractual(valoractual:number){
    this.valoractual=valoractual
}

mostrardatos(): void{
    console.log("datos de la cuenta");
    console.log(`titular: ${this.titular}`);
    console.log(`valor actual: ${this.valoractual}`);
    console.log("------------------------");
}

ingresar(cantidad: number) {
    if (cantidad < 0) {
      console.log("No es válido el valor.");
    } else {
      this.valoractual += cantidad;
    }
  }


public retirar(retiro:number){
  if(retiro <= this.valoractual){
    this.valoractual -= retiro;
    
}  else {
    console.log("no hay suficiente saldo en la cuenta.")
}
}

}
