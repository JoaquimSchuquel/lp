//classe
class Retangulo {
    constructor(altura, largura) {
      this.altura = altura;
      this.largura = largura;
    }
  }
  const p = new Retangulo(10, 20); 
  console.log(p);
  //herança
  class Animal {
    constructor(nome) {
      this.nome = nome;
    }
  
    sound() {
      console.log("o animal fez um barulho");
    }
  }
  
  class Dog extends Animal {
    constructor(nome, raca) {
      super(nome);
      this.raca = raca;
    }
  
    sound() {
      console.log("o cachorro latiu.");
    }
  }
  
  const myDog = new Dog("Fido", "Golden Retriever");
  myDog.sound(); 
  //objeto
  let pessoa = {
    nome:"joaquim",
    talk: function(){
        console.log("meu nome é "
    +this.nome)
}
  }
  pessoa.talk()
//polimorfismo
class Forma {
    dizerOlá() {
      console.log("Olá, eu sou uma forma!");
    }
  }
  
  class Círculo extends Forma {
    dizerOlá() {
      console.log("Olá, eu sou um círculo!");
    }
  }
  
  class Retângulo extends Forma {
    dizerOlá() {
      console.log("Olá, eu sou um retângulo!");
    }
  }
  
  let formas = [new Círculo(), new Retângulo()];
  
  for (let forma of formas) {
    forma.dizerOlá();
  }

//atributo
class Carro {
    cor; // atributo
    modelo; // atributo
  }

//metodo
class Carro {
    cor;
    modelo;
  
    ligar() { // método
      console.log("O carro está ligado!");
    }
  
    acelerar() { // método
      console.log("O carro está acelerando!");
    }
  }
  //metodo sao as funções dentro das classes