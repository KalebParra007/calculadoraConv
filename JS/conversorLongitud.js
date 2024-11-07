

export function metrosKilometros(){
    var valorUno = Number(prompt("Ingrese el valor que desea convertir"))
let result = valorUno/1000

console.log(valorUno + " metro/s son: " + result + " kilometros")

}

export function kilometrosMillas(){
    var valor = Number(prompt("Ingrese el valor que desea convertir"))
let resultUno = valor*0.621371

console.log(valor + " kilometro/s son: " + resultUno + " milla/s")
}

export function millasMetros(){
    var valorDos = Number(prompt("Ingrese el valor que desea convertir"))
let resultDos = valorDos*1609.34

console.log(valorDos + " millas/s son: " + resultDos + " metro/s")
}