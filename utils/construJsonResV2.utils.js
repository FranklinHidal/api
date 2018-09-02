module.exports = reply => {
    return {"time": {
                        "timestamp": Number(reply.timestamp)
                     }, 
             'BTC':  {  
                        "VES": Number(reply.BTCVES),
                        "USD": Number(reply.BTCUSD),
                        "GBP": Number(reply.BTCGBP),
                        "EUR": Number(reply.BTCEUR),
                        "XMR": Number(reply.BTCXMR),
                        "ETH": Number(reply.BTCETH),
                        "LTC": Number(reply.BTCLTC),
                        "ARS": Number(reply.BTCARS)
                    },
            'LTC':  {   
                        "VES": Number(reply.LTCVES),
                        "USD": Number(reply.LTCUSD),
                        "GBP": Number(reply.LTCGBP),
                        "EUR": Number(reply.LTCEUR),
                        "XMR": Number(reply.LTCXMR),
                        "ETH": Number(reply.LTCETH),
                        "ARS": Number(reply.LTCARS),
                        "BTC": Number(reply.LTCBTC)
                    },
            'XMR':  {   
                        "VES": Number(reply.XMRVES),
                        "USD": Number(reply.XMRUSD),
                        "GBP": Number(reply.XMRGBP),
                        "EUR": Number(reply.XMREUR),
                        "ETH": Number(reply.XMRETH),
                        "LTC": Number(reply.XMRLTC),
                        "ARS": Number(reply.XMRARS),
                        "BTC": Number(reply.XMRBTC)
                    },
            'ETH':  {   
                        "VES": Number(reply.ETHVES),
                        "USD": Number(reply.ETHUSD),
                        "GBP": Number(reply.ETHGBP),
                        "EUR": Number(reply.ETHEUR),
                        "LTC": Number(reply.ETHLTC),
                        "XMR": Number(reply.ETHXMR),
                        "ARS": Number(reply.ETHARS),
                        "BTC": Number(reply.ETHBTC)
                    },
  'exchange_rates': { 
                        "USDEUR": Number(reply.USDEUR),
                        "USDVES": Number(reply.USDVES),
                        "USDARS": Number(reply.USDARS),
                        "USDXVE": Number(reply.USDXVE),
                        "EURXVE": Number(reply.EURXVE),
                        "EURVES": Number(reply.EURVES),
                        "USDXAR": Number(reply.USDXAR)
                    },
            }
}