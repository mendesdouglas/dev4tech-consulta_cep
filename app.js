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
            showResults(data)
        })
    })
}

const showResults = (data) => {
    let info = document.querySelector('.information')

    info.innerHTML = `<h1>INFORMATIONS</h1>
                      <input type="text" value="${data.cep}" readonly id="bairro"/>
                      <input type="text" value="${data.bairro}" readonly id="bairro"/>
                      <input type="text" value="${data.complemento}" readonly id="bairro"/>
                      <input type="text" value="${data.localidade}" readonly id="bairro"/>
                      <input type="text" value="${data.logradouro}" readonly id="bairro"/>
                      <input type="text" value="${data.uf}" readonly id="bairro"/>
                      `
}





