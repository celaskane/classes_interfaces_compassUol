interface Nomeado {
    readonly nome: string;
}

//interfaces podem herdar mais de uma interface, classes herdam paenas uma classe
interface Greetable extends Nomeado {
    greet(frase: string): void;
}

class Pessoa implements Greetable, Nomeado {
    nome: string;
    idade: number;

    constructor(n: string, idade: number) {
        this.nome = n;
        this.idade = idade;
    }

    greet(frase: string) {
        console.log(frase + ' ' + this.nome);
    }
}

let user1: Greetable;

user1 = new Pessoa('Alejandro', 77);

user1.greet('Hola, yo soy');
console.log(user1);