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
    sobrenome?: string; //? = opicional
}

//interfaces podem herdar mais de uma interface, classes herdam paenas uma classe
interface Greetable extends Nomeado {
    greet(frase: string): void;
}

class Pessoa implements Greetable, Nomeado {
    nome: string;
    idade: number;
    sobrenome?: string;

    constructor(n: string, idade: number, sn?: string) {
        this.nome = n;
        this.idade = idade;
        if (sn) {
            this.sobrenome = sn;
        }
    }

    greet(frase: string) {
        if (this.nome && !this.sobrenome) {
            console.log(frase + ' ' + this.nome);
        }
        else if (this.nome && this.sobrenome) {
            console.log(frase + ' ' + this.nome + ' ' + this.sobrenome);
        }
        else {
            console.log('oi');
        }
    }
}

let user1: Greetable;

user1 = new Pessoa('Alejandro', 77, 'Jodorowsky');

user1.greet('Hola, yo soy');
console.log(user1);