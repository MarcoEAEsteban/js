let num = document.querySelector('input#num')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    } else{
        return false
    }

}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}



function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ""
    }else{
        window.alert('valor invalido o ya encontrado en la lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
   if(valores.length == 0){
       window.alert('Adicione un valor antes de finalizar')
   } else {
       let total = valores.length
       let mayor = valores[0]
       let menor = valores[0]
       let suma = 0
       let media = 0
       for(let pos in valores){
            suma += valores[pos]
            if(valores[pos]> mayor)
                mayor = valores[pos]
            if(valores[pos]< menor)
                menor = valores[pos]
       }
       media = suma/total
       res.innerHTML = ''
       res.innerHTML += `<p>En total, tenemos ${total} numeros cadastrados.</p>` 
       res.innerHTML += `<p>el mayor numero informado es ${mayor}.</p>`
       res.innerHTML += `<p>El menor numero informado es ${menor}.</p>`
       res.innerHTML += `<p>La suma de los valores es ${suma}.</p>`
       res.innerHTML += `<p>La media de los valores es ${media}.</p>`
   }
    
}
