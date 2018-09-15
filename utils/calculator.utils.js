const calculator = (json,currency,amount,to,version) => {
    let res = null
    let booleanType = true
    let number = 0
    let aux = null
    let dataValid = false
    
    if (currency=='VEF'||currency=='VES'||currency=='USD'||currency=='GBP'||currency=='EUR'||currency=='ARS') {
        if (!to)
            aux = 'BTC'
        else
            aux = to
        to = currency
        currency = aux
        booleanType = false
    }
    if (!to){
        if (version)
            to = 'VES'
        else
            to = 'VEF'
    }
    for (const key in json) {
        if (json.hasOwnProperty(key)) {
            if (key.search(currency.toUpperCase())>-1 && amount > 0) {
                const object = json[key]
                for (const key in object) {
                    if (object.hasOwnProperty(key)) {
                        if (key.search(to.toUpperCase())>-1) {
                            dataValid = true
                            if (booleanType) 
                                number =  amount * object[key]
                            else
                                number =  amount / object[key]
                            if (number.toString().search("e")>-1)
                                dataValid = false
                            else 
                                res = truncate(number)
                            console.log(number.toString().search("e"))
                        }
                    }
                }
            }
        }
    }
    if (!dataValid)
        res = '0.00000000'
    return res
}
const truncate = num => num.toString().match(/^-?\d+(?:\.\d{0,8})?/)[0]

module.exports = calculator