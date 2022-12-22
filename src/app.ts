//type AddFn = (a: number, b: number) => number;
//função anônima
interface AddFn {
    (a: number, b: number): number;
}

let soma: AddFn;

soma = (n1: number, n2: number) => {
    return n1 + n2;
};

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