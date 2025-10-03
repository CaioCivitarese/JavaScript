/*
1. Classe simples com método

Crie uma classe Pessoa com as propriedades nome e idade. Adicione um método apresentar() que mostre no console:
Olá, meu nome é ___ e tenho ___ anos.
*/

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

// Criando objetos da classe Pessoa
const pessoa1 = new Pessoa("Ana", 25);
const pessoa2 = new Pessoa("Carlos", 30);

// Chamando o método apresentar
pessoa1.apresentar();
pessoa2.apresentar();

