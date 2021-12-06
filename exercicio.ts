class Estudante {
    nome: string;
    sobrenome: string;
    idade: number;
  
    constructor(
      private _nome: string,
      private _idade: number,
      private _sobrenome: string
    ) {
      this.nome = _nome;
      this.idade = _idade;
      this.sobrenome = _sobrenome;
    }
  
    ola(): void {
      console.log('O estudante ' + this.nome + this.sobrenome + ' tem ' + this.idade + ' anos.');
    }
  }
  
  let joao: Estudante = new Estudante('João', 9, 'Pimentel');
  joao.ola();
