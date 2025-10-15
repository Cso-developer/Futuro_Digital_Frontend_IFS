class Livro {
  constructor(titulo, autor, statusDisponibilidade) {
    this.titulo = titulo;
    this.autor = autor;
    this.statusDisponibilidade = statusDisponibilidade;
  }

  informacoes() {
    console.log(`Título: ${this.titulo}`);
    console.log(`Autor: ${this.autor}`);
    console.log(`Status de Disponibilidade: ${this.statusDisponibilidade}`);
  }
  emprestar() {
    if (this.statusDisponibilidade === 'disponível') {
      this.statusDisponibilidade = 'emprestado';
      console.log(`O livro "${this.titulo}" foi emprestado com sucesso.`);
    } else {
      console.log(`O livro "${this.titulo}" não está disponível para empréstimo.`);
    }
  }
  devolver() {
    if (this.statusDisponibilidade === 'emprestado') {
      this.statusDisponibilidade = 'disponível';
      console.log(`O livro "${this.titulo}" foi devolvido com sucesso.`);
    } else {
      console.log(`O livro "${this.titulo}" não estava emprestado.`);
    }
  }
}

const Livraria = [livro1 = new Livro('1984', 'George Orwell', 'disponível'),
livro2 = new Livro('O Senhor dos Anéis', 'J.R.R. Tolkien', 'emprestado'),
livro3 = new Livro('Dom Casmurro', 'Machado de Assis', 'disponível')];

livro2.devolver()
for (const livro of Livraria) {
  livro.informacoes();
  console.log('_____________________________________');
} 

