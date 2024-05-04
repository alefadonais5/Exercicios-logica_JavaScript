let numero1 = parseInt(prompt("Digite o primeiro numero: "))
let numero2 = parseInt(prompt("Digite o segundo numero: "))

if (numero1 == numero2) {
    alert("Os numeros não podem ser iguais")
}else if (numero1 > numero2){
    alert ("Ordem crescente dos dois numeros: " + numero1 + " , " + numero2 + ".")
}else{
    alert ("Ordem crescente dos dois numeros: " + numero2 + " , " + numero1 + ".") 
}
