function calcular() {
    let num = document.getElementById('num')
    let tab = document.getElementById('tab')

    if (num.value.length == 0) {
        alert('Por favor, insira um número!')
    } else {
        var n = Number(num.value)
    }

    tab.innerHTML = ''

    for (var c = 1; c <= 10; c++) {
        var item = document.createElement('option')
        item.text += `${n} x ${c} = ${n * c}`
        item.value = `tab${c}`
        tab.appendChild(item)
    }
}