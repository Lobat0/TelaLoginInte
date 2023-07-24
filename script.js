

document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault()
    const username = document.getElementById('loginUsername').value
    const password = document.getElementById('loginPassword').value

    //checando nome e senha
    if (username === 'admin' && password === 'password'){
        //login aceito
        alert("Login efetuado com sucesso!")
    } else{
        //senhas incorretas ou usuário não encontrado
        alert('Nome de usuario ou senha invalido')
    }
})


document.getElementById('registrationForm').addEventListener('submit', function(event){
    event.preventDefault()
    const username = document.getElementById('regUsername').value
    const email = document.getElementById('regEmail').value
    const password = document.getElementById('regPassword').value
    const confirmPassword = document.getElementById('regConfirmPassword').value

    //verifica o preenchimento dos campos
    if (username && email && password && confirmPassword){
        //checar se a senha bate com confirmação
        if (password === confirmPassword) {
            //registro com sucesso
            alert('Registrado com sucesso')
            //resetar o form
            document.getElementById('registrationForm').reset()
        }else {
            //as duas senhas são diferentes, mostrar erro
        alert('Senhas diferentes')
        }
        
    } else{
        //campos vazios, mostrar mensagem de erro para completar os dados corret
        alert('Preencher todos os campos')
    }

})