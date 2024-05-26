type Id = number | string 

let id: number | string //union para tipar basicos
let id2: Id
let id3: Id
let id4: Id

type TUser = {nome: string, idade: number}

let user: TUser
user = {
    nome: "Guilherme",
    idade: 22
}

// ou pode criar uma interface para tipar objetos

interface IUser {nome: string, idade: number}

let user2: IUser
user = {
    nome: "Guilherme",
    idade: 22
}


//Extendendo interface e type
// "?" na variável significa opcional
interface IPessoa {nome: string, idade: number, carro?: string}
interface IAluno extends IPessoa {curso: string, matricula: number}

type TPessoa = {nome: string, idade: number}
type TAluno = TPessoa & {curso: string, matricula: number}

let pessoa: IAluno
pessoa = {
    nome: 'Guilherme',
    idade: 22,
    curso: "Ciência da Computação",
    matricula: 196890
}

//Generics
interface Pessoa<T> {
    nome: string,
    idade: number,
    profissao?: T
}

interface Engenheiro /*extends Pessoa*/ {crea: string}
interface Medico /*extends Pessoa*/ {crm: string}
interface Estudante /*extends Pessoa*/ {matricula: string}

let engenheiro: Pessoa<Engenheiro>
let medico: Pessoa<Medico>
let estudante: Pessoa<Estudante>




