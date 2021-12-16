function calcular() {
    var num = document.querySelector('input#num')
    var tab = document.querySelector('select#seltab')

    if (num.value.length == 0) {
        alert('Digite um número!')
    } else {
        var n = Number(num.value)
    }

    tab.innerHTML = ''

    for (var c = 1; c <= 10; c++) {
        var s = n * c
        var item = document.createElement('option')
        item.text += `${n} x ${c} = ${s}`
        item.value = `tab${c}`
        tab.appendChild(item)
    }
}