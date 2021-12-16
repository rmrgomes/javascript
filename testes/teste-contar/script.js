function contar() {
    var inicio = document.querySelector('input#txtini')
    var fim = document.querySelector('input#txtfim')
    var passo = document.querySelector('input#txtpass')
    var res = document.querySelector('div#res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = '<br> Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
    }   
    
    if(i < f) {
        // Contagem crescente
        for (var c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
        }
    } else {
        // Contagem Decrescente
        for (var c = i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F334}`
    }
}

