function montros(){
    let staminaHeroi = 3
    let totalXpGanho = 0
    while (staminaHeroi > 0) {
        let nivelMonstro = parseInt(prompt("Digite o nível do monstro:"));
        let dificuldadeBatalha = parseInt(prompt("Digite a dificuldade da batalha:"));
        const xpGanho = nivelMonstro * dificuldadeBatalha * 10;
        console.log("Voce ganhou " + xpGanho + " XP!");
        staminaHeroi --
        totalXpGanho += xpGanho
            
        };
    return(totalXpGanho)    
}
let xpHeroi = montros()
let nomeHeroi = prompt("Nome do Heroi")
if (xpHeroi < 1000){
    console.log("O Herói de nome "+ nomeHeroi +" está no nível de Ferro")}
    else if (xpHeroi > 1000 && xpHeroi <= 2000){
        console.log("O Herói de nome "+ nomeHeroi +" está no nível de Bronze")}
    else if (xpHeroi > 2000 && xpHeroi <= 5000){
        console.log("O Herói de nome "+ nomeHeroi +" está no nível de Prata")}
    else if (xpHeroi > 5000 && xpHeroi <= 7000){
        console.log("O Herói de nome "+ nomeHeroi +" está no nível de Ouro")}
    else if (xpHeroi > 7000 && xpHeroi <= 8000){
        console.log("O Herói de nome "+ nomeHeroi +" está no nível de Platina")}
    else if (xpHeroi > 8000 && xpHeroi <= 9000){
        console.log("O Herói de nome "+ nomeHeroi +" está no nível de Ascendente")}
    else if (xpHeroi > 9000 && xpHeroi <= 10000){
        console.log("O Herói de nome "+ nomeHeroi +" está no nível de Imortal")}
    else if (xpHeroi > 10000){
        console.log("O Herói de nome "+ nomeHeroi +" está no nível de Radiante")}
