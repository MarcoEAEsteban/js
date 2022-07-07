var ahora = new Date()
var hora = ahora.getHours()
console.log(`Ahora son las ${hora} horas`)
if(hora >=6 && hora < 12){
    console.log('Buenos dias!')
}else if(hora >=12 && hora < 18){
    console.log('Buenas tardes!')
}else if(hora <= 5){
    console.log('Buenas madrugadas!')
}else{
    console.log('Buenas noches!')
}