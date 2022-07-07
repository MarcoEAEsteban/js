var num = document.getElementById('num')
var caja = document.getElementById('marco') 
function crear(){
    if(num.value.length == 0){
        alert('Digite un numero')
    }else{
        
        let inicio = 1
        while(inicio <= 10){
            let nuevo = document.createElement('option')
            nuevo.text = `${num.value} x ${inicio} = ${num.value*inicio}`
            nuevo.value = `caja${inicio}`
            inicio++
            caja.appendChild(nuevo)  
        }
        //limpiar()
    }
}

function limpiar(){
    if(caja.value.length >= 0 ){
        caja.innerHTML = ''
    }
    
}