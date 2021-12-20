let num = Number(document.querySelector('#num').value)
let ana = document.querySelector('#ana')
let res= document.querySelector('#res')
let valores = []

function adicionar() {
    if (Number(num.value) == 0) {
        alert('Insira um número válido!')
    } else if (Number(num.value) < 1 || Number(num.value) > 100){
        alert('Número inválido! Digite um número entre 1 e 100')
    } else {
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado`
        ana.appendChild(item)
        valores = num
    }   
}

function analizar(valores) {
    
}