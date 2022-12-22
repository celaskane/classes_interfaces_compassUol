interface Pessoa {
    nome: string;
    idade: number;

    greet(frase: string): void;
}

let user1: Pessoa;
user1 = {
    nome: 'Alejandro',
    idade: 77,
    greet(frase: string) {
        console.log (frase + ' ' + this.nome);
    }
};

user1.greet('Hola, yo soy');