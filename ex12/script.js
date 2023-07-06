const data = [
  {
    nome: "Roger Medeiros",
    sexo: "M",
    salario: 3250,
  },
  {
    nome: "Carolina Silva",
    sexo: "F",
    salario: 1200,
  },
  {
    nome: "Cristina Avila",
    sexo: "F",
    salario: 8100,
  },
  {
    nome: "Gustavo Hoffman",
    sexo: "M",
    salario: 5200.35,
  },
  {
    nome: "Eva Trindade",
    sexo: "F",
    salario: 2501,
  },
  {
    nome: "Andre Mathias",
    sexo: "M",
    salario: 1750,
  },
  {
    nome: "Joice Castro da Silva",
    sexo: "F",
    salario: 3350.25,
  },
];

// 1. Imprima no console a quantidade de pessoas Total.
// 2. Imprima no console a quantidade de pessoas do sexo Feminino.
// 3. Imprima no console a soma do salário de todas as pessoas.
// 4. Imprima no console a média do salário de todas as pessoas.
// 5. Imprima no console a soma do salário de todas as pessoas do sexo Masculino.
// 6. Imprima no console a média do salário de todas as pessoas do sexo Masculino.
// 7. Utilize a função Some para descobrir se existe algum salário superior a R$ 7.000.
// 8. Utilize a função findIndex para descobrir a posição da pessoa de nome 'Eva Trindade'.
// 9. Utilize a função filter para filtrar todas as pessoas que o nome possua o sobrenome "Silva"
// 10. Imprima os nomes utilizando o MAP.



// 1
console.log("Quantidade de pessoas total:", data.length);

// 2
const Feminino = data.filter((pessoa) => pessoa.sexo === "F");
console.log("Quantidade de pessoas do sexo Feminino:", Feminino);

// 3
const somaSalarios = data.reduce((total, pessoa) => total + pessoa.salario, 0);
console.log("Soma dos salários de todas as pessoas:", somaSalarios);

// 4
const mediaSalarios = somaSalarios / data.length;
console.log("Média dos salários de todas as pessoas:", mediaSalarios);

// 5
const somaSalariosMasculino = data
  .filter((pessoa) => pessoa.sexo === "M")
  .reduce((total, pessoa) => total + pessoa.salario, 0);
console.log(
  "Soma dos salários de todas as pessoas do sexo Masculino:",
  somaSalariosMasculino
);

// 6
const pessoasMasculino = data.filter((pessoa) => pessoa.sexo === "M");
const mediaSalariosMasculino =
  pessoasMasculino.reduce((total, pessoa) => total + pessoa.salario, 0) /
  pessoasMasculino.length;
console.log(
  "Média dos salários de todas as pessoas do sexo Masculino:",
  mediaSalariosMasculino
);

// 7
const salarioMaiorQue7000 = data.some((pessoa) => pessoa.salario > 7000);
console.log("Existe salário superior a R$ 7.000:", salarioMaiorQue7000);

// 8
const EvaTrindade = data.findIndex(
  (pessoa) => pessoa.nome === "Eva Trindade"
);
console.log('Posição da pessoa de nome "Eva Trindade":', EvaTrindade);

// 9
const sobrenomeSilva = data.filter((pessoa) => pessoa.nome.includes("Silva"));
console.log('Pessoas com sobrenome "Silva":', sobrenomeSilva);

// 10
const nomes = data.map((pessoa) => pessoa.nome);
console.log("Nomes:", nomes);
