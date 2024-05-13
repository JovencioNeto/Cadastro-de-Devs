// Recebendo valores nas variáveis a partir do ID
const button_technologies = document.getElementById('button_technologies')
const form = document.getElementById('form')
const button_cadastro = document.getElementById('button_cadastrar')
// Varíavel que irá aumentar ou diminuir para diferenciar os inputs e labels e sua coleta de informações
let number_input = 0

// Recebe uma div a partir do ID e dentro dessa div existe outra com os inputs e labels dentro do formulário
button_technologies.addEventListener('click', (ev) =>{
    // Adição da configuração EV para evitar atualizações de página

    ev.preventDefault()
    
    // Variável que altera a cada "Click"
    number_input++

    // Variável com o ID bloco
    const  section_bloco = document.getElementById('bloco')

    // Variável de uma Div para utilizar no botão Remover e estiliza-lo no CSS
    const div_remove = document.createElement('div')
    div_remove.id = 'div_remove'

    // Criação de uma nova Div e seu ID
    const area_cadastro = document.createElement('div')
    area_cadastro.id = "area_cadastro"

    // Quebras de linhas que vão ser utilizadas
    const br = document.createElement('br')
    const br1 = document.createElement('br')
    const br2 = document.createElement('br')
    const br3 = document.createElement('br')
    const br4 = document.createElement('br')
    const br5 = document.createElement('br')


    // Inputs e labels e sua configurações
    const label_Tecnologia = document.createElement('label')
    label_Tecnologia.innerText = 'Nome da tecnologia'
    label_Tecnologia.setAttribute('for','tecnologias') 

    const input_tecnologias = document.createElement('input')
    input_tecnologias.type = 'text'
    input_tecnologias.name = 'tecnologias'
    input_tecnologias.id = 'tecnologias'
    input_tecnologias.placeholder = 'Digite o nome da tecnologia'
    input_tecnologias.className = 'input_text_tecnologias'

    const subTitulo = document.createElement('label')
    subTitulo.innerText = 'Tempo de experiência:'
    subTitulo.setAttribute('for','input_time' + number_input) 

    const input_time1 = document.createElement('input')
    input_time1.type = 'radio'
    input_time1.name = 'input_time' + number_input
    input_time1.id ='input_time1-' + number_input
    input_time1.value = '0-2 anos'
    input_time1.className = number_input

    const label_time1 = document.createElement('label')
    label_time1.innerText = '0-2 anos'
    label_time1.setAttribute('for', 'input_time1-' + number_input)

    const input_time2 = document.createElement('input')
    input_time2.type = 'radio'
    input_time2.name = 'input_time' + number_input
    input_time2.id ='input_time2-' + number_input
    input_time2.value = '3-4 anos'
    input_time2.className = number_input

    const label_time2 = document.createElement('label')
    label_time2.innerText = '3-4 anos'
    label_time2.setAttribute('for', 'input_time2-' + number_input)

    const input_time3 = document.createElement('input')
    input_time3.type = 'radio'
    input_time3.name = 'input_time' + number_input
    input_time3.id ='input_time3-' + number_input
    input_time3.value = '5+ anos'
    input_time3.className = number_input

    const label_time3 = document.createElement('label')
    label_time3.innerText = '5+ anos'
    label_time3.setAttribute('for', 'input_time3-' + number_input)

    const remove = document.createElement('button')
    remove.innerText = 'Remover tecnologia'
    remove.id = 'remove_button'

    // Configurando para que uma variavel fique identada dentro de outras segundo a sequencia feita

    div_remove.appendChild(remove)
    area_cadastro.append(label_Tecnologia,br,input_tecnologias,br1,subTitulo,br2,input_time1,label_time1,br4,input_time2,label_time2,br5,input_time3,label_time3,br3,div_remove)
    section_bloco.appendChild(area_cadastro)
    form.appendChild(section_bloco)

    // Adição de um evento de "Click" ao botão de remover tecnologia

    remove.addEventListener('click', (ev) =>{
        ev.preventDefault()
        section_bloco.removeChild(area_cadastro)
        // Alteração da varável para coletar os valores anteriores
        number_input--
    })
})

// Adição de evento de "Click" ao botão de cadastrar tecnologia

button_cadastro.addEventListener('click', (ev) =>{

    // Retomando as variáveis anteriores com outras variaveis a partir do ID

    const name = document.getElementById('name').value
    const tecnologia_name = document.querySelectorAll(`input[id = 'tecnologias']`)
    const time_tecnologias = document.querySelectorAll(`input[type = 'radio']:checked`)

    // Verificar se foi ou não criado uma tecnologia e coletando as primeiras ocorrências

    if((name.length > 0) && (tecnologia_name.length == 0) && time_tecnologias.length == 0){
        alert("Cadastro conclído!" +
            "\nApenas o nome do Dev foi inserido" +
            "\nNome do dev: " + name
        );
    }
    else if(name.length == 0 || tecnologia_name.length == 0|| time_tecnologias.length == 0){
        alert("Algumas espaços não foram preenchidos, preencha os campos corretamente!");
    }
    else if(name.length > 0 && tecnologia_name.length > 0 && time_tecnologias.length > 0){
        for(var i = 0; i < number_input; i++ ){
            alert(
                "Cadastro concluido" +
                "\nNome do dev: " + name +
                "\nNome da tecnologia: " + tecnologia_name[i].value +
                "\nTempo de uso das tecnologias: " + time_tecnologias[i].value
            )
        }}

    // Console.log para mostrar no console se os valores estão sendo recebidos ou não

    console.log({name, tecnologia_name, time_tecnologias})

})

// Adição de um Evento para coletar valores que estão dentro da tag Form

form.addEventListener('submit', (ev) =>{
    ev.preventDefault()

})