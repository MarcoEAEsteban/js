function contar(){
    let inicio = window.document.getElementById('inicio')
    let fin = window.document.getElementById('fin')
    let paso = window.document.getElementById('paso')
    let res = window.document.getElementById('res')
   
    if (inicio.value.length == 0 || fin.value.length == 0 || paso.value.length == 0){
        alert('[ERRO] Falta algun dato,')
        res.innerHTML = 'imposible contar'
    } else {
        res.innerHTML = 'Contando: <br>'
        let ini = Number(inicio.value)
        let fi = Number(fin.value)
        let pa = Number(paso.value)

        if(pa <= 0){
            window.alert('Paso invalido! considerando paso como 1')
            pa = 1
        }
        if(ini < fi){// forma creciente
            for(let c = ini; c <= fi; c+=pa){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            
        } else { // forma decresiente
            for(let c = ini; c>= fi; c -= pa){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            
        }
        res.innerHTML += `\u{1F3C1} `
        
       



    }
    
   
    
}

    