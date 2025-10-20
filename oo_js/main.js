class Funcionario {
    constructor(nome, cargo, salario) {
        if (new.target === Funcionario) {
            throw new Error("Não é possível instanciar uma classe abstrata!");
        }
        this.nome = nome;
        this.cargo = cargo;
        this._salario = salario;
    }

    getSalario() {
        return `O salário de ${this.nome} é ${this._salario}`;
    }

    setSalario(valor) {
        if (typeof valor === 'number') {
            this._salario = valor;
        }
    }

    aumento() {
        throw new Error("O método 'aumento' deve ser implementado na subclasse");
    }

    dizCargo() {
        console.log(this.cargo);
    }
}

class Estagiario extends Funcionario {
    constructor(nome) {
        super(nome, "Estagiário", 2000);
    }

    aumento() {
        const novoSalario = this._salario * 1.07;
        this.setSalario(novoSalario);
        console.log(`Novo salário do estagiário ${this.nome}: ${novoSalario}`);
    }
}

class Gerente extends Funcionario {
    constructor(nome) {
        super(nome, "Gerente", 10000);
    }

    aumento() {
        const novoSalario = this._salario * 1.15;
        this.setSalario(novoSalario);
        console.log(`Novo salário do gerente ${this.nome}: ${novoSalario}`);
    }
}

const funcionario1 = new Gerente("Paula");
const funcionario2 = new Estagiario("Pedro");
const funcionario3 = new Estagiario("Maria");

funcionario1.aumento(); 
funcionario2.aumento();
funcionario3.aumento();

console.log(funcionario1.getSalario());
console.log(funcionario2.getSalario());
console.log(funcionario3.getSalario());

funcionario1.dizCargo();
funcionario2.dizCargo();
funcionario3.dizCargo();
