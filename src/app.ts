class Departamento {
    /* private id: string;
    private nome: string; */   //public padrão (não precisa declarar)
    private empregados: string[] = [];

    //readonly não permite mudanças
    constructor(private readonly id: string, public nome: string) {
        /* this.nome = n;
        this.id = id; */
    }

    describe(this: Departamento) {
        console.log(`Departamento (${this.id}): ${this.nome}`);
    }

    addEmpregado(empregado: string) {
        this.empregados.push(empregado);
    }

    mostraInformacaoEmpregado() {
        console.log(this.empregados.length);
        console.log(this.empregados);
    }
}

const contabilidade = new Departamento('abc', 'Contabilidade');
contabilidade.addEmpregado('Alejandro');
contabilidade.addEmpregado('Lisandro');
/* contabilidade.empregados[2] = 'Leandros'; */   //acessível de fora da classe (adicoinar private)
contabilidade.describe();
contabilidade.mostraInformacaoEmpregado();

/* const contabilidadeCopia = { nome: 'Qulauqer', describe: contabilidade.describe };
contabilidadeCopia.describe(); */