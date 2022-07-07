function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano || fano.value < 1860){
        window.alert('[erro] Verifique los datos nuevamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var edad = ano - Number(fano.value)// calculando edad
        var genero = ''
        var img = document.getElementById('foto')
        //var img = document.createElement('img')//creando elemento imagen
        //img.setAttribute('id','foto')//tribuyendo id="foto" a img

        if(fsex[0].checked){//si formulario sexo es chacado
            genero = 'Hombre'
            if(edad>=0 && edad <10){
                //ninho
                img.setAttribute('src', 'ninho.jpg')
                res.innerHTML = `Detectamos infante con ${edad} años.`
                
            }else if(edad<21){
                //joven
                img.setAttribute('src', 'joven.jpg')
                res.innerHTML = `Detectamos adolecente con ${edad} años.`
            }else if(edad<50){
                //adulto
                img.setAttribute('src', 'senhor.jpg')
                res.innerHTML = `Detectamos adulto con ${edad} años.`
            }else{
                //abuelo
                img.setAttribute('src', 'abuelo.jpg')
                res.innerHTML = `Detectamos persona mayor con ${edad} años.`
            }
        }else if(fsex[1].checked){
            genero = 'Mujer'
            if(edad>=0 && edad <10){
                //ninho
                img.setAttribute('src', 'ninha.jpg')
                res.innerHTML = `Detectamos infante con ${edad} años.`
            }else if(edad<21){
                //joven
                img.setAttribute('src', 'senhorita.jpg')
                res.innerHTML = `Detectamos adolecente con ${edad} años.`
            }else if(edad<50){
                //adulto
                img.setAttribute('src', 'senhora.jpg')
                res.innerHTML = `Detectamos adulto con ${edad} años.`
            }else{
                //abuelo
                img.setAttribute('src', 'abuela.jpg')
                res.innerHTML = `Detectamos persona mayor con ${edad} años.`
            }
        }
        //res.style.textAlign = "center"
        //res.innerHTML = `Detectamos ${genero} con ${edad} años.`
        //res.appendChild(img)//adicionando imagen
        
    }
}