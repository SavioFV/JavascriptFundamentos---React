var greeting = document.getElementById('greeting')
var username = ''
function logar(){
    var username = prompt('Digite seu usuário: ')
    
    if (username === null || username === ''){
        alert('Digite um nome ')
    }   else {
        greeting.innerHTML = 'Bem vindo' + username
        
        let btnLogout = document.CreateElement ('button')
        btnLogout.InnerText = 'Logout'

        btnLogout.onclick = logout 

        greeting.appendChild(btnLogout)
    } 

}

function logout() {
    alert('Loged out')
    greeting.innerHTML = 'Ate mais ' + username
}