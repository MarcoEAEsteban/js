
function evaluar(){
    var date = new Date()
    var ano = date.getFullYear()
    var fecha = document.getElementById('ano')
    var res = document.getElementById('res')

    if(fecha.value == 0 || fecha.value > ano || fecha.value < 1860){
        alert("[ERRO] revise sus respuestas")
    }else{
        var sex = document.getElementsByName('sex')//[0][1]
        var edad = ano - fecha.value
        var gene = ""
        var img = document.getElementById('imagen')
        if(sex[0].checked){
            gene = "Hombre"
            if(edad == 0 || edad < 10){
                //nino
                res.innerHTML = `Detectamos infante con ${edad} anos!`
                img.setAttribute('src', 'ninho.jpg')
            }else if(edad < 21){
                //adolecente
                res.innerHTML = `Detectamos adolecente con ${edad} anos!`
                img.setAttribute('src','joven.jpg')
            }else if(edad < 50){
                //adulto
                res.innerHTML = `Detectamos adulto con ${edad} anos!`
                img.setAttribute('src', 'senhor.jpg')
            }else{
                //persona mayor
                res.innerHTML = `Detectamos persona mayor con ${edad} anos!`
                img.setAttribute('src', 'abuelo.jpg')
            }
        }else if(sex[1].checked){
            gene = "mujer"
            if(edad == 0 || edad < 10){
                //nino
                res.innerHTML = `Detectamos infante con ${edad} anos!`
                img.setAttribute('src', 'ninha.jpg')
            }else if(edad < 21){
                //adolecente
                res.innerHTML = `Detectamos adolecente con ${edad} anos!`
                img.setAttribute('src','senhorita.jpg')
            }else if(edad < 50){
                //adulto
                res.innerHTML = `Detectamos adulto con ${edad} anos!`
                img.setAttribute('src', 'senhora.jpg')
            }else{
                //persona mayor
                res.innerHTML = `Detectamos persona mayor con ${edad} anos!`
                img.setAttribute('src', 'abuela.jpg')
            }
        }
        
    }
}