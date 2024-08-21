function carregar (){
    var mensagem = document.querySelector('div.divMensagem')
    var imagem = document.querySelector('img.imagem')
    var data = new Date()
    var hora = data.getHours()
    
    mensagem.innerHTML = `Agora são ${hora} horas.`
    if(hora>=6 && hora<16){
        //Dia
        imagem.src = 'Manhã.png'
        document.body.style.backgroundColor = '#d8ac3e'
    }
    else if(hora>=16 && hora<19){
        //Tarde
        imagem.src = 'Tarde.png'
        document.body.style.backgroundColor = '#fd7e5d'
    }
    else {
        //Noite
        imagem.src = 'Noite.png'
        document.body.style.backgroundColor = '#131d1e'
        
    }

}