class Departamento {
    nome: string;

    constructor(n: string) {
        this.nome = n;
    }
}

const contabilidade = new Departamento('Contabilidade');
console.log(contabilidade);