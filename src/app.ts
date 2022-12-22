interface Greetable {
    nome: string;

    greet(frase: string): void;
}

class Pessoa implements Greetable {
    nome: string;

    constructor(n: string) {
        this.nome = n;
    }

    greet(frase: string) {
        console.log(frase + ' ' + this.nome);
    }
}

let user1: Greetable;

user1 = new Pessoa('Alejandro');

user1.greet('Hola, yo soy');
console.log(user1);