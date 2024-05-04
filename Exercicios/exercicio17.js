let quantidade_macas = parseInt(prompt("Quantas maçãs serão compradas? "))
let valor_total;

if (quantidade_macas < 12){
    valor_total = 1.30 * quantidade_macas
    alert("As " + quantidade_macas + " maçãs custa R$ " + valor_total + " reais.")
}else{
    valor_total = 1.00 * quantidade_macas
    alert("As " + quantidade_macas + " maçãs custa R$ " + valor_total + " reais.") 
}   