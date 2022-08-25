//const cep = '85858150'

var initMethods = {
    method: 'GET',
    headers: {
           "Content-Type": "text/plain"
    },
    mode: 'no-cors',
    cache: 'default'
}


const search = async () => {
    const cep = document.querySelector('#cep').value
    let url = `https://viacep.com.br/ws/${cep}/json/`
    await fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
        })
    })
}



