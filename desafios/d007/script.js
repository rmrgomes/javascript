var dolar = parseFloat(prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'))

function converter() {
    var carteira = parseFloat(prompt('Quanto R$ você tem na carteira?'))
    var res = document.querySelector('div#res')

    var compra = carteira / dolar

    res.innerHTML = `A cotação atual do Dólar é de US$ ${dolar.toFixed(2)}, com BR$ ${carteira.toFixed(2)} você conseguirá comprar US$ ${compra.toFixed(2)}`
}