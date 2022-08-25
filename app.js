//const axios = require('axios');


const cep = '85858150'
//const cep = document.querySelector('#cep')
var initMethods = {
    method: 'GET',
    headers: {
           "Content-Type": "text/plain"
    },
    mode: 'no-cors',
    cache: 'default'
}
const search = async   (e) => {
    //e.preventDefault()

    let url = `https://viacep.com.br/ws/${cep}/json/`
    await fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
        })
    })
}
//auth()
search()

// function searchAddress() {
//     let cep = '85858150'

//     if(cep.length !== 8){
//         alert('cep ')
//         return; 
//     }

//     let url = ``
// }