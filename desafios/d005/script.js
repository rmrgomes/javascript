function converter() {
    var medida = document.getElementById('medida')
    var metros = prompt('Digite uma distância em metros (m)')

    var km = metros / 1000
    var hm = metros / 100
    var dam = metros / 10
    var dm = metros / 0.1
    var cm =  metros / 0.01
    var mm =  metros / 0.001

    medida.innerHTML = `A distância de ${metros}, corresponde a... <br>`

    medida.innerHTML += `${km.toFixed(3)} quilômetros (Km) <br>`
    medida.innerHTML += `${hm.toFixed(3)} hectômetros (Hm) <br>`
    medida.innerHTML += `${dam.toFixed(3)} hectômetros (Dam) <br>`
    medida.innerHTML += `${dm.toFixed(1)} hectômetros (dm) <br>`
    medida.innerHTML += `${cm.toFixed(0)} hectômetros (cm) <br>`
    medida.innerHTML += `${mm.toFixed(0)} hectômetros (mm) <br>`

}