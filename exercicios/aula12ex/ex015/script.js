function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/bebe-menino.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-menino.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto-homem.png')
            } else {
                //velho
                img.setAttribute('src', 'imagens/velho-adulto.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/bebe-menina.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-menina.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulta-mulher.png')
            } else {
                //velho
                img.setAttribute('src', 'imagens/velha-mulher.png')
            }
        }
        res.innerHTML = `Detectamos ${genero
        } com ${idade} anos.`
        res.appendChild(img)
    }
}