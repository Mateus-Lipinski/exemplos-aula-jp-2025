//----Muda a cor do H2---//
const exemploH2 = document.getElementById("exemplo-h2");
//console.log("element ====>",element);
exemploH2.style.color = 'blue';

//----Faz com que crie um novo H1 na tela----//
const novaH1 = document.createElement('h1'); //Criando o variavel "novaH1"
novaH1.textContent = "NOVO ELEMENTO H1 NA TELA";
//console.log("novaH1 ====>", novaH1);
document.body.appendChild(novaH1);

//----Faz com que o H1 criado recentemente apareça embaixo do H2----//
exemploH2.appendChild(novaH1);

//-----------------------------------Exercicios do sor----------------------------------------------//
//----Mudando a cor do Header----//
const exemploHeader = document.getElementById("header"); //Criando o variavel "exemploHeader"
//console.log("header ====>", exemploHeader);
exemploHeader.style.color = "black"; //Chama o variavel e muda a cor dele

//----Aumentando a fonte do footer----//
const exemploFooter = document.getElementById("footer"); //Criando o variavel "exemploFooter"
console.log("exemploFooter ====>", exemploFooter);
exemploFooter.style.fontSize = "100px"; //Aumentando o Footer
//--------------------------------------------------------------------------------------------------//


//----Faz com que apareça um prompt na tela quando apertar o button 'ExemploJS'----//
const buttonExemploJS = document.getElementById("buttonExemploJS");
buttonExemploJS.addEventListener('click', () => {
    prompt("Digite um número")
});

//----Faz com que se apertar o button 'Enviar', previne de atualizar a página, e faz com que apareça no console "Batata"----//
const form = document.querySelector("form");
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("Batata")
});

//----Faz com que apareça um aviso na tela toda vez que colocar o mouse em cima de um lugar em especifico----//
const exemploHeader1 = document.getElementById("header");
exemploHeader1.addEventListener('mouseover', () => {
    alert("Vire a esquerda e voce encontrara doces")
})

//----Toda tecla clicada vai pro console junto excrito a tecla que foi clicada----//
document.addEventListener('keydown', (event) => {
    console.log("Tecla clicada", (event.key))
})

//----Desafio----//
const listaUl = document.querySelector("ul");
const buttonAdicionar = document.getElementById("adicionarItem");

buttonAdicionar.addEventListener('click', (event) => {
    let li = document.createElement("li");
    listaUl.appendChild(li);
    li.textContent = "Novo Item" + listaUl.children.length
});