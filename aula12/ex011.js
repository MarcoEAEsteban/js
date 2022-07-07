var edad = 66
console.log(`Usted tiene ${edad} anhos.`)
if(edad < 16){
    console.log('No vota')
} else if(edad < 18 || edad > 65){
    console.log('Voto opcional')
} else{
        console.log('Voto obligatorio')
    }