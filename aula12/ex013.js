var ahora = new Date()
var diaSem = ahora.getDay()
/* dias de la semana:
0 - domingo
1 - lunes
2 - martes
3 - miercoles
4 - jueves
5 - viernes
6 - sabado
*/
switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Lunes')
        break
    case 2:
        console.log('Martes')
        break
    case 3:
        console.log('Miercoles')
        break
    case 4:
        console.log('Jueves')
        break
    case 5:
        console.log('Viernes')
        break
    case 6:
        console.log('Sabado')
    default:
        console.log('[erro] Dia invalido')
        break
}