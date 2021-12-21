let num = document.querySelector('#num')
let ana = document.querySelector('#ana')
let res= document.querySelector('#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) { 
        // ! significa que não está na lista
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        ana.appendChild(item)
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maiorNumero = Math.max.apply(null, valores)
        let menorNumero = Math.min.apply(null, valores)
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
        }
        media = soma/total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número encontrado na lista é ${maiorNumero}.`
        res.innerHTML += `<p>O menor número encontrado na lista é ${menorNumero}.`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}
