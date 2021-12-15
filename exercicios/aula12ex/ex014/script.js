function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //Bom Dia
        img.src = 'imagens/manha.png'
        document.body.style.background = '#ffbd83'
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#1467b7'
    } else {
        //Boa Noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#373f70'
    }
 
}
