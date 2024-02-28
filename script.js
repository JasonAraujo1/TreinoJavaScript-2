function carregar(){// assim que a página carregar(f5)

var agora = new Date()
var hora = agora.getHours()
var txtHora = window.document.getElementById('txtHora')
var body = window.document.getElementById('body')
var foto = window.document.getElementById('foto')


if(hora < 13){
    txtHora.innerHTML = `agora são ${hora} horas.`
    document.body.style.background = '#fe764e'
    foto.src = 'manha.png'
}

else if(hora < 18){
    txtHora.innerHTML = `agora são ${hora} horas.`
    document.body.style.background = '#95806f'
    foto.src = 'tarde.png'
}

else if(hora < 24){
    txtHora.innerHTML = `agora são ${hora} horas.`
    document.body.style.background = '#b04d3c'
    foto.src = 'noite.png'
}


}