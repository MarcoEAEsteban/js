
let valores = [8,1,7,4,2,9]
console.log(valores)
console.log(valores.sort())
/* 

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])


console.log(valores)
for(let pos = 0; pos < valores.length; pos++){
    console.log(`la pocicion ${pos} tiene el valor ${valores[pos]}`)
}
*/
for(let pos in valores){
    console.log(`la posicion ${pos} tiene el valor ${valores[pos]}`)
}