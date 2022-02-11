# EMIS Check-Digit

É uma lib javascript para gerar digitos unicos de pagamentos por referencia da EMIS-AO.

## Instalação

Para instação podes usar [npm](https://www.npmjs.com/) or yarn.

```bash
npm i emis-check-digit
```

```bash
yarn add emis-check-digit --save
```

## Como usar

```javascript
import foobar

# Importa a lib e inicializa com o número da entidade gerada pela EMIS

const EMIS = require('emis')

//00123 é o número da entidade
let _emis = new EMIS('00123')

// passa como opções o total da factura ou serviço à ser gerado a referencia.
// 50 é o valor do serviço a pagar

let options = {
    total: 50
}

//Finalmente passa a sequencia a ser gerada. (1 é a sequencia das ref)
_emis.checkDigit(1, options)
.then(response => console.log(response))

# resultado
001230000000955000

// Atenção que as referencias devem ser unicas, é da responsábilidade das entidades
// controlarem da melhor forma as suas sequencias

```

## Contribuição

Participe fazendo um fork do projecto, no final um PR.

## License

[MIT](https://choosealicense.com/licenses/mit/)
