export class ContaBancaria {
    private _saldo: number;
    private _numero: string;
    private _agencia: string;
    
    constructor(numero: string, agencia: string) {
        this._saldo = 0;
        this._numero = this._validarNumero(numero) ? numero : "00000-0";
        this._agencia = this._validarAgencia(agencia) ? agencia : "0000-0";
    }
    

    consultar(): number {
        return this._saldo;
    }

    depositar(valor: number): boolean {
        if(valor >= 0){
            this._saldo += valor;
            return true;      
        }   
        return false;
    }

    sacar(valor: number): boolean {
        if(valor >= 0 && valor <= this._saldo){
            this._saldo -= valor;
            return true;
        } 
        return false;
    }

    get getNumero(): string {
        return this._numero;
    }

    set setNumero(valor: string) {
        if(this._validarNumero(valor)){
            this._numero = valor;
        } else{
            console.log("Formato de número é inválido"); 
        }
    }

    private _validarNumero(numero: string): boolean{
        const regex = /^\d{5}-\d{1}$/;

        if(regex.test(numero)){
            this._agencia = numero;
            return true;
        } 
        return false;
    }

    get getAgencia(): string {
        return this._agencia;
    }

    set setAgencia(valor: string) {
        if(this._validarAgencia(valor)){
            this._agencia = valor;
        } else{
            console.log("Formato de número é inválido");
        }
    }

    private _validarAgencia(agencia: string): boolean{
        const regex = /^\d{4}-\d{1}$/;

        if(regex.test(agencia)){
            this._agencia = agencia;
            return true;
        }
        return false;
    }
}