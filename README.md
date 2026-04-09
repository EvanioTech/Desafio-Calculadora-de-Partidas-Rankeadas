# 🏆 Calculadora de Rank de Herói

Este projeto calcula o saldo de vitórias de um herói e define seu nível (rank) com base na diferença entre vitórias e derrotas.

---

## 📌 Regras de Classificação

O nível do herói é definido com base no saldo de vitórias:

| Saldo de Vitórias | Nível    |
| ----------------- | -------- |
| Menor que 10      | Ferro    |
| 11 - 20           | Bronze   |
| 21 - 50           | Prata    |
| 51 - 80           | Ouro     |
| 81 - 90           | Diamante |
| 91 - 100          | Lendário |
| Maior que 100     | Imortal  |

---

## 📂 Estrutura do Projeto

```id="tree03"
📁 projeto
 ├── index.js
 ├── desafio.md
 └── README.md
```

---

## 📄 Sobre o desafio

O arquivo `desafio.md` contém a descrição original do desafio, incluindo os requisitos para cálculo do saldo de vitórias e definição do nível do herói.

---

## 💻 Implementação

O código utiliza:

* Função para calcular o saldo de vitórias
* Função para definir o nível do herói
* Impressão do resultado no console

```javascript id="code03"
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
    return "Imortal"; 
}

let nivel = definirNivel()

function myRanked() {
    console.log(`O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`)
}

myRanked()
```

---

## ▶️ Como executar

1. Certifique-se de ter o Node.js instalado
2. Execute o comando no terminal:

```bash 
node index.js
```

---

## 👨‍💻 Autor

Desenvolvido por Matias

---
