class Departamento {
    nome: string;
    empregados: string[] = [];

    constructor(n: string) {
        this.nome = n;
    }

    describe(this: Departamento) {
        console.log('Departamento: ' + this.nome);
    }
}

const contabilidade = new Departamento('Contabilidade');
contabilidade.describe();

const contabilidadeCopia = { nome: 'Qulauqer', describe: contabilidade.describe };
contabilidadeCopia.describe();