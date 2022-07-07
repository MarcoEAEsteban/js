function cargar(){
    
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagen")
    var data = new Date()
    var minu = new Date()
    var hora = data.getHours()
    var min = minu.getMinutes()
    msg.innerHTML = `Ahora son las ${hora} horas y ${min} minutos.<br><br>`
    if(hora >= 0 && hora < 12){
        msg.innerHTML += "Buenos dias!"
        img.src = "pexels-warren-blake-1477430.jpg"
        document.body.style.background = "#e2cd9f"
    }else if(hora >= 12 && hora < 18){
        msg.innerHTML += "Buenas tardes!"
        img.src ="tarde.png"
        document.body.style.background = "#b9846f"
    }else{
        msg.innerText += "Buenas noches!"
        img.src ="noche.png"
        document.body.style.background = "hsla(244, 84%, 10%, 0.524)"
    }
}












