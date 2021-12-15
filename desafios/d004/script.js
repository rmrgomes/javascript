function calcula() {
    var produto = prompt('Que produto você está comprando?')
    var preço = Number(prompt(`Quanto custa ${produto}, que você está comprando?`))
    var valor = Number(prompt('Qual foi o valor que você deu para pagar o mouse gamer?'))
   
    var troco = valor - preço
    alert(` Você comprou ${produto} que custou R$ ${preço}. \n Deu R$ ${valor} em dinheiro e vai receber R$ ${troco} de troco. \n Volte Sempre!`)
}