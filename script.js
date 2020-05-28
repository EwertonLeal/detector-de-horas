function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('icon')
    var data = new Date()
    var hora = data.getHours()

    if (hora >= 0 && hora < 12) {
        document.body.style.background = '#55d8e9'
        msg.innerHTML = `Agora são ${hora} horas, Bom dia`
        img.src = 'img/manhã.jpg'
    } else if (hora >= 12 && hora <= 18 ) {
        document.body.style.background = '#f5ac68'
        msg.innerHTML = `Agora são ${hora} horas, Boa tarde`
        img.src = 'img/tarde.jpg'
    } else {
        document.body.style.background = '#251c3b'
        msg.innerHTML = `Agora são ${hora} horas, Boa noite`
        img.src = 'img/noite.jpg'
    }
}
