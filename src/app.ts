class Departamento {
    nome: string;   //public padrão (não precisa declarar)
    private empregados: string[] = [];

    constructor(n: string) {
        this.nome = n;
    }

    describe(this: Departamento) {
        console.log('Departamento: ' + this.nome);
    }

    addEmpregado(empregado: string) {
        this.empregados.push(empregado);
    }

    mostraInformacaoEmpregado() {
        console.log(this.empregados.length);
        console.log(this.empregados);
    }
}

const contabilidade = new Departamento('Contabilidade');
contabilidade.addEmpregado('Alejandro');
contabilidade.addEmpregado('Lisandro');
/* contabilidade.empregados[2] = 'Leandros'; */   //acessível de fora da classe (adicoinar private)
contabilidade.describe();
contabilidade.mostraInformacaoEmpregado();

/* const contabilidadeCopia = { nome: 'Qulauqer', describe: contabilidade.describe };
contabilidadeCopia.describe(); */