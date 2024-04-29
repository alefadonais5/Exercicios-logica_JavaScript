let n1 = parseInt(prompt("Qual o primeiro numero? "))
let n2 = parseInt(prompt("Qual o segundo numero? "))
let n3 = parseInt(prompt("Qual o terceiro numero? "))

if (n1 > n2 && n1> n3){
    alert("O numero " + n1 + " é o maior")
}else if (n2 > n1 && n2 > n3){
            alert("O numero " + n2 + " é o maior")
}else{
    alert("O numero " + n3 + " é o maior")
}