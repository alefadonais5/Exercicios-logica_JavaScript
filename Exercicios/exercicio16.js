let horario_inicio = parseInt(prompt("Digite o horario de inicio do jogo: "))
let horario_fim = parseInt(prompt("Digite o horario de fim do jogo: "))

let duracao_jogo
//analisar essa formula.... 
if (horario_fim < horario_inicio){
    duracao_jogo = (24-horario_inicio) + horario_fim
}else if(horario_fim > horario_inicio){
    duracao_jogo = horario_fim - horario_inicio
}else{
    duracao_jogo = 24
}

alert("O total de horas jogadas, foram " + duracao_jogo + " horas.")