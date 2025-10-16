class Gerente extends Funcionario {
    constructor(nome, salarioBase, departamento){
        super(nome, salarioBase);
        this.departamento = departamento;
    }

    calcularBonus(percentual){
        const bonusFuncionario = super.calcularBonus(percentual);
        return bonusFuncionario ;
    }
}

const a = new Gerente("AAAAA",100,"Gerencia") 

let bonus = a.calcularBonus(10)
console.log(bonus)


