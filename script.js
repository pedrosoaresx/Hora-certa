function carregar(){//função que vai carregar a hora do sistema
    var msg = document.getElementById('msg')
    var image = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`;
    if (hora >= 5 && hora <= 12){
        //bom dia
        image.src = 'imagens/imagem-manha.png'
        document.body.style.background = '#384124'
    }
    else if (hora >= 12 && hora <= 18){
        //boa tarde
        image.src = 'imagens/imagem-tarde.png'
        document.body.style.background = '#AA614A'
    }
    else{
        //boa noite
        image.src = 'imagens/imagem-noite.png'
        document.body.style.background = '#1A0401'
    }
}