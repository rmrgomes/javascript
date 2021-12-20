let num = [5, 8, 2, 3]
num[4] = 8
num.push(7)
num.length
num.sort()
console.log(`nosso vetor é o ${num}`)
let pos = num.indexOf(8)

if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}