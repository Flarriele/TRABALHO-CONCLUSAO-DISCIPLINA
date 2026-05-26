export default class ServicoDePagamento{

    #pagamentos;

    constructor(){
        this.#pagamentos = [];

    }

    pagar(codigoBarras, empresa, valor) {

        let categoria = 'padrão';

        if (valor > 100.00) {
            categoria = 'cara';
        }

        this.#pagamentos.push({
            codigoBarras: codigoBarras,
            empresa: empresa,
            valor: valor,
            categoria: categoria
        });
    }

    consultarUltimoPagamento() {
        return this.#pagamentos.at(-1);
    }
}