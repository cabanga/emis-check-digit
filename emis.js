
class Emis {
    entity_number
    product_code


    constructor(entity_number, product_code) {
        this.entity_number = entity_number
        this.product_code = product_code
    }

    async checkDigit(options = {}) {
        let uniq_digit = await this.generate_uniq_ref(options.sequencial, options.total)
        return uniq_digit
    }

    async generate_uniq_ref(sequencial, total) {
        let array_by_positions = await this.get_array(sequencial)
        let result = await this.calculate_weight_with_position(array_by_positions)
        let merge_ref = this.generate_unig_ref(result, total)
        let check_digit = await this.pad_reference(merge_ref, 15)

        return check_digit
    }

    async get_array(number) {
        let number_pad = await this.pad_reference(number, 15)
        return number_pad.toString().split('')
    }

    async pad_reference(num, digite) {
        num = num.toString()
        while (num.length < digite) num = "0" + num
        return num;
    }

    async calculate_weight_with_position(ref_array) {
        var result = 0
        var length_array = ref_array.length + 1

        for (let position = 1; position < length_array; position++) {
            let current_position = (length_array - position)
            let weight = await this.calculate_weight(Number(current_position))

            let digite = Boolean(ref_array[position + 1]) ? ref_array[position + 1] : 0
            let mult_weight_digite = digite * weight
            result = result + mult_weight_digite
        }

        let response = await this.get_mod_main(result)
        return response
    }

    async calculate_weight(sequence) {
        let result = (10 ** (sequence - 1)) % 97
        return result
    }

    async get_mod_main(value) {
        return 98 - (value % 97)
    }

    generate_unig_ref(check_digit, total) {
        let result = `${check_digit}${total.toFixed(2)}${this.product_code}`
        return result.replace('.', '')
    }

}

module.exports = Emis;
