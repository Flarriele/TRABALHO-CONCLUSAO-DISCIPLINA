import ServicoDePagamento from "../src/servicoDePagamento.js";
import assert from 'node:assert'

describe('Classe de serviço de pagamento', () => {

    it('Validar que o pagamento foi adicionado na categoria cara', function (){
        //Arrange
        const servicoDePagamento = new ServicoDePagamento();

        //Act
        servicoDePagamento.pagar(
            '0000-8569-0001',
            'coelba',
            150.32
        );

        const pagamento = servicoDePagamento.consultarUltimoPagamento();

        //Assert
        assert.equal(pagamento.codigoBarras,'0000-8569-0001' );
        assert.equal(pagamento.empresa, 'coelba');
        assert.equal(pagamento.valor, 150.32);
        assert.equal(pagamento.categoria, 'cara');

    });

    it('Validar que o pagamento foi adicionado na categoria padrão', function (){
        //Arrange
        const servicoDePagamento = new ServicoDePagamento();

        //Act
        servicoDePagamento.pagar(
            '2563-8569-0001',
            'embasa',
            32.99
        );

        const pagamento = servicoDePagamento.consultarUltimoPagamento();

        //Assert
        assert.equal(pagamento.codigoBarras,'2563-8569-0001' );
        assert.equal(pagamento.empresa, 'embasa');
        assert.equal(pagamento.valor, 32.99);
        assert.equal(pagamento.categoria, 'padrão');
        
        });
});