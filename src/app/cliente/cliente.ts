export class Cliente {

    id: number;
    nome: string;
    endereco: string;
    email: string;

    constructor(id?: number, nome?: string, endereco?: string, email?: string){
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
        this.email = email;
    }
}