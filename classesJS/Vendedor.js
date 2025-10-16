class Vendedor extends Funcionario {
  constructor(nome, salarioBase, departamento) {
    super(nome, salarioBase);
    this.departamento = departamento;
  }

  calcularBonus(percentual) {
    const bonusFuncionario = super.calcularBonus(percentual);
    return bonusFuncionario;
  }
}

const v = new Vendedor("BBBBB", 200, "Vendas");

let bonusVendedor = v.calcularBonus(10);
console.log(bonusVendedor);