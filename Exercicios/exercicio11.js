let anos = parseInt(prompt("Olá, digite sua idade? "))
let meses = parseInt(prompt("Quantos meses? "))
let dias = parseInt(prompt("Quantos dias? "))

let conversor = (anos*365) + (meses*30) + dias

alert("A pessoa tem  " + conversor + " dias de vida")