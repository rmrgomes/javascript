function converter() {
    var celsius = parseFloat(prompt('Digite uma temperatura em °C (Celsius)'))
    var c = celsius
    var res = document.querySelector('div#res')

    var k = c + 273.15
    var f = c * 1.8 + 32

    res.innerHTML = `<strong>A temperatura de ${c}°C, corresponde a...</strong> <br> `

    res.innerHTML += `${k.toFixed(2)}°K (Kelvin) <br>`
    res.innerHTML += `${f.toFixed(2)}°F (Fahrenheit) <br>`
    
}
