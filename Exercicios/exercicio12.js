let Total_Eleitores = parseInt(prompt("Quantos eleitores tem no municipio "))
let Votos_Validos = parseInt(prompt("Quantos votos foram a validos? "))
let Votos_Branco = parseInt(prompt("Quantos votos em branco? "))
let Votos_Nulo = parseInt(prompt("Quantos votos nulos? "))

//Falta fazer os calculos
let Percentual_Validos = (Total_Eleitores*Votos_Valido)/100
let Percentual_Branco = (Total_Eleitores*Votos_Branco)/100
let Percentual_Nulo = (Total_Eleitores*Votos_Nulo)/100

alert("Total de eleitores: " + Total_Eleitores + "/n Votos Válidos: " + Percentual_Validos + "/n Votos Brancos : " + Percentual_Branco + "/n Votos Nulos: " + Percentual_Nulo)