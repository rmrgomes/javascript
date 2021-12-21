let num = document.querySelector('#num')
let tab = document.querySelector('#tab')
let res = document.querySelector('#res')
let valores = []


function isNum(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if(isNum(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text += `Número ${num.value} adicionado.`
        tab.appendChild(item)
    } else {
        alert('Número inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Por favor, insira um número antes de iniciar!')
    } else {
        let total = valores.length
        let maiorNum = Math.max.apply(null, valores)
        let menorNum = Math.min.apply(null, valores)
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
        }
        media = soma/total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número cadastrado é ${maiorNum}.</p>`
        res.innerHTML += `<p>O menor número cadastrado é ${menorNum}.</p>`
        res.innerHTML += `<p>A soma de todos os números é ${soma}.</p>`
        res.innerHTML += `<p>A média de todos os números é ${media}.</p>`
    }
}