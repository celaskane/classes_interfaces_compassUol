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

class DepartamentoTI extends Departamento{
    admins: string[]
    constructor(id: string, admins: string[]) {
        super(id, 'TI');
        this.admins = admins;
    }
}

class DepartamentoContabilidade extends Departamento{
    constructor(id: string, private reports: string[]) {
        super(id, 'TI');
        this.reports = reports;
    }
    addReport(texto: string) {
        this.reports.push(texto);
    }
    getReports() {
        console.log(this.reports);
    }
}

const ti = new DepartamentoTI('abc', ['Leandros']);
ti.addEmpregado('Lisandro');
ti.addEmpregado('Alejandro');
/* contabilidade.empregados[2] = 'Leandros'; */   //acessível de fora da classe (adicoinar private)
ti.describe();
ti.mostraInformacaoEmpregado();

console.log(ti);

const contabilidade = new DepartamentoContabilidade('def', []);
contabilidade.addReport('Algo deu errado');
console.log(contabilidade);

/* const contabilidadeCopia = { nome: 'Qulauqer', describe: contabilidade.describe };
contabilidadeCopia.describe(); */