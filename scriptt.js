function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert ('Verifique os dados inseridos e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute ('id', 'foto')

       if (fsex[0].checked){
            gênero = 'Homem'
       
       if (idade >= 0 && idade <5) {
            img.setAttribute('src', 'bebe-masculino.jpg')

       } else if (idade < 14){
            img.setAttribute ('src', 'criança-masculino.jpg')

       } else if (idade < 22){
            img.setAttribute ('src', 'adolescente-masculino.jpg')

       } else if (idade < 59){
            img.setAttribute ('src', 'adulto-masculino.jpg')

       } else (
           img.setAttribute ('src', 'idoso-masculino.jpg')
       )
       }

       if (fsex[1].checked){
        gênero = 'Mulher'

        if (idade >= 0 && idade <5) {
            img.setAttribute('src', 'bebe-feminina.jpg')

       } else if (idade < 14){
            img.setAttribute ('src', 'criança-feminina.jpg')

       } else if (idade < 22){
            img.setAttribute ('src', 'adolescente-feminina.jpg')

       } else if (idade < 59){
            img.setAttribute ('src', 'adulto-feminina.jpg')

       } else (
           img.setAttribute ('src', 'idoso-feminina.jpg')
       )
       

       }
       res.innerHTML = `Detectamos ${gênero}, de ${idade} anos!`
       res.appendChild (img)
    }
}