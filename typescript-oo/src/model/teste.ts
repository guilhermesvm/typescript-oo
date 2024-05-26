class Pessoa {
    nome: string;
    idade: number;

    constructor();
    constructor(nome: string);
    constructor(nome: string, idade: number);
    constructor(nome?: string, idade?: number) {
        this.nome = nome || 'Anônimo';
        this.idade = idade || 0;
    }

    exibirDetalhes() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
    }
}

// Uso das diferentes sobrecargas
const pessoa1 = new Pessoa();
pessoa1.exibirDetalhes(); // Saída: Nome: Anônimo, Idade: 0

const pessoa2 = new Pessoa('João');
pessoa2.exibirDetalhes(); // Saída: Nome: João, Idade: 0

const pessoa3 = new Pessoa('Maria', 30);
pessoa3.exibirDetalhes(); // Saída: Nome: Maria, Idade: 30
