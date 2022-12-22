abstract class Departamento {
    static anoFiscal = 2022;
    /* private id: string;
    private nome: string; */   //public padrão (não precisa declarar)
    protected empregados: string[] = [];    //protected permite utilização em classes herdadas

    //readonly não permite mudanças
    constructor(protected readonly id: string, public nome: string) {
        /* this.nome = n;
        this.id = id; */
        console.log(Departamento.anoFiscal);
    }

    static criaEmpregado(nome: string) {
        return {nome: nome};
    }

    abstract describe(this: Departamento): void;

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
    describe() {
        console.log('Departamento TI - ID: ' + this.id);
    }
}

class DepartamentoContabilidade extends Departamento{
    private ultimoReport: string;
    private static instance: DepartamentoContabilidade;
    
    get maisRecenteReport() {
        if (this.ultimoReport){
            return this.ultimoReport;
        }
        throw new Error('Nenhum report encontrado');
    }

    set maisRecenteReport(valor: string) {
        if (!valor){
            throw new Error('Por favor, insira um valor válido!');
        }
        this.addReport(valor);
    }

    //private constructor impede a criação de novos departamentos fora da classe
    private constructor(id: string, private reports: string[]) {
        super(id, 'TI');
        this.reports = reports;
        this.ultimoReport = reports[0];
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new DepartamentoContabilidade('ghi', []);
    }

    describe() {
        console.log('Departamento de Contabilidade - ID:' + this.id);
    }

    addEmpregado(nome: string): void {
        if (nome === 'Alejandro') {
            return;
        }
        this.empregados.push(nome);
    }
    addReport(texto: string) {
        this.reports.push(texto);
        this.ultimoReport = texto;
    }
    getReports() {
        console.log(this.reports);
    }
}

const empregado1 = Departamento.criaEmpregado('lalo')
console.log('empregado1', empregado1);

const ti = new DepartamentoTI('abc', ['Leandros']);
ti.addEmpregado('Lisandro');
ti.addEmpregado('Alejandro');
/* contabilidade.empregados[2] = 'Leandros'; */   //acessível de fora da classe (adicoinar private)
ti.describe();
ti.mostraInformacaoEmpregado();

console.log(ti);

//const contabilidade = new DepartamentoContabilidade('def', []);
const contabilidade = DepartamentoContabilidade.getInstance();
/* contabilidade.maisRecenteReport = '';
contabilidade.addReport('Algo deu errado');
contabilidade.addEmpregado('llllll');
contabilidade.mostraInformacaoEmpregado(); */

console.log(contabilidade);

/* contabilidade.describe(); */



/* const contabilidadeCopia = { nome: 'Qulauqer', describe: contabilidade.describe };
contabilidadeCopia.describe(); */