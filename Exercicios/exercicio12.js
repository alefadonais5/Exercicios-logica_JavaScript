let Total_Eleitores = parseInt(prompt("Quantos eleitores tem no municipio "))
let Votos_Validos = parseInt(prompt("Quantos votos foram a validos? "))
let Votos_Branco = parseInt(prompt("Quantos votos em branco? "))
let Votos_Nulo = parseInt(prompt("Quantos votos nulos? "))


let Percentual_Validos = (Votos_Validos * Total_Eleitores) / 100
let Percentual_Branco = (Votos_Branco * Total_Eleitores) / 100
let Percentual_Nulo = (Votos_Nulo * Total_Eleitores) / 100

alert("Total de eleitores: " + Total_Eleitores + "\n Votos Válidos: " + Percentual_Validos + "%\n Votos Brancos : " + Percentual_Branco + "%\n Votos Nulos: " + Percentual_Nulo + "%")