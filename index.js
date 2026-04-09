function calculoRanked(vitorias,derrotas) {
    let result = vitorias - derrotas
    return result
}

let saldoVitorias = calculoRanked(300,238)

function definirNivel() {
    if (saldoVitorias < 10) return "Ferro";
    if (saldoVitorias <= 20) return "Bronze";
    if (saldoVitorias <= 50) return "Prata";
    if (saldoVitorias <= 80) return "Ouro"; 
    if (saldoVitorias <= 90) return "Diamante";
    if (saldoVitorias <= 100) return "Lendário";
    return "Imortal"; }

let nivel = definirNivel()

function myRanked() {
    console.log(`O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`)
}
myRanked()


