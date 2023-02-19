/* Crie um perfil em HTML/CSS e faça com que ele seja populado com informações obtidas da API do seu github.
Você pode mudar o final do endpoint com seu usuário para obter suas informações.
https://api.github.com/users/DaniSimoni */


async function search () {
    const response = await fetch('https://api.github.com/users/DaniSimoni')
    const data = await response.json()
    console.log(data)
    document.getElementById('name').innerHTML = data?.name;
    document.getElementById('html_url').innerHTML = data?.html_url ;
    document.getElementById('bio').innerHTML = data?.bio;
    document.getElementById('location').innerHTML = data?.location;
    document.getElementById('avatar_url').src = data?.avatar_url; 
        console.log(data.avatar_url.value)
}
search()



