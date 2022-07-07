function crear(){
    let num = window.document.getElementById('numero')
    let caja = window.document.getElementById('cuerpo')
    if(num.value.length==0){
        alert('Digite un numero por favor')

    }else{
        caja.innerHTML = ''
        for(let c = 1; c<=10; c++){
            let item = document.createElement('option')
            let numero = Number(num.value)
            let res = (numero * c)
            item.text = `${numero} x ${c} = ${res}`
            caja.appendChild(item)
            
        }
        iten.value = `caja${c}`
    }  
}
