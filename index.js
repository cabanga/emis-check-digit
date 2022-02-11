

const EMIS = require('./emis')

let _emis = new EMIS('00123')

let options = {
    total: 50
}

for (let index = 1; index < 10; index++) {
    _emis.checkDigit(index, options)
        .then(response => console.log(response))
}
