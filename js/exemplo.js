const lista = ["Ford Enter", "Senai Cimatec", 2025, ["Emerson", "Camila", "Benjamin"]];
//Permite diversos tipos de dados e permite alteração

const tupla = ("Ford Enter", "Senai Cimatec", 2025, ["Emerson", "Camila", "Benjamin"]);
//Permite diversos tipos de dados, mas não permite alteração

const dicionario = {
    "Instituições": ["Ford Enter", "Senai Cimatec"],
    "Ano": 2025,
    "Alunos": ["Emerson", "Camila", "Benjamin"]
} // permite diversos tipos de dados, refencia valor a partir de chaves, mas não permite alteração



const valores = [2, 3, 4, 5];

const dobro = valores.map((valor) => {
    valor * 2
})

console.log(dobro); //Valor esperado: [4, 6, 8, 10]


const alunos = ["Emerson", "Camila", "Benjamin"];

alunos.forEach((aluno, index) => {
    if (aluno === "Camila") {
        console.log("Camila está na posição: " + toString(index));
    }
}); //Resultado esperado: "Camila está na posição: 1"



