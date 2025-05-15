const form = document.getElementById('form')

const nome = document.getElementById('nome')
const numeroA = document.getElementById('numero-a')
const numeroB = document.getElementById('numero-b')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const valorA = Number(numeroA.value)
    const valorB = Number(numeroB.value)

    const mensagemSucesso = `Está certo, o campo B:  <b>${numeroB.value}</b> é maior que o campo A:  <b>${numeroA.value}</b>`

    if(valorB > valorA){
        containerMensagemSucesso = document.querySelector('.sucess-message') 
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = 'block'
        numeroB.classList.remove('error')
        document.querySelector('.error-message').style.display = 'none'

        nome.value = ''
        numeroA.value = ''
        numeroB.value = ''
    } else {
        numeroB.classList.add('error')
        document.querySelector('.error-message').style.display = 'block'

        nome.value = ''
        numeroA.value = ''
        numeroB.value = ''
    }

    
})


