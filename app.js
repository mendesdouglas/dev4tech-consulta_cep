//const cep = '85858150'

var initMethods = {
    method: 'GET',
    headers: {
           "Content-Type": "text/plain"
    },
    mode: 'no-cors',
    cache: 'default'
}
let history = []
const cep = document.querySelector('#cep').value
const cepInput = document.querySelector('#cep')

const limpaInput = () =>{
    cep.innerHTML=" "
}

cepInput.addEventListener('keyup', e=> {
    if(e.key === 'Enter'){
        search()
        //limpaInput()
    }
})




const search = async () => {
    const cep = document.querySelector('#cep').value
    let url = `https://viacep.com.br/ws/${cep}/json/`
    await fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data)
            showResults(data)
            document.querySelector('#cep').value = ''

        })
    })

    
}

const showResults = (data) => {
    let info = document.querySelector('.information')
    let history_el = document.querySelector('.history-cep')
    
    
    history.push(data)
    console.log(history)

    info.innerHTML = `<h1>INFORMATIONS</h1>
                      <label> Bairro</label>
                      <input type="text" value="${data.cep}" readonly id="bairro"/>
                      <input type="text" value="${data.bairro}" readonly id="bairro"/>
                      <input type="text" value="${data.complemento}" readonly id="bairro"/>
                      <input type="text" value="${data.localidade}" readonly id="bairro"/>
                      <input type="text" value="${data.logradouro}" readonly id="bairro"/>
                      <input type="text" value="${data.uf}" readonly id="bairro"/>
                      `

    history_el.innerHTML = history.map(getElement)
    function getElement(item,index){
                           return  [`<div class="element">
                                <p>${index+1} </>
                                <div class="components">
                                    <div class="cep-title">${item.cep}</div>
                                    <div class="cep-information">${item.localidade} - ${item.uf} </div>
                                </div>
                                <div class="buttons-cep">
                                <button> delete </button>
                                <button> ver </button>
                                </div>
                            </div>`].join(" ")
    }
}





