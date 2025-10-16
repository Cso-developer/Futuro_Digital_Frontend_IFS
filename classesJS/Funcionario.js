class Funcionario{
    constructor(nome, salarioBase){
        this.nome = nome;
        this.salarioBase = salarioBase;
       
    }

    calcularBonus(percentual){
        return this.salarioBase * percentual / 100;
    }


}

