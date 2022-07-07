let num = [8,3,9,2,7]
num.push(1)
num.sort()

console.log(num)
console.log(`El vector tiene ${num.length} pociciones`)
console.log(`el primer valor del vector es ${num[0]}`)

let pos = num.indexOf(8)

if(pos == -1){
    console.log('El valor no fue encontrado!')
}else{
    console.log(`El valor esta en la posicion ${pos}`)
}
