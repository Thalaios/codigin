

//Aciona a função adicionar tarefa caso clique no botão
function adicionarTarefa() {

    //Recebe o valor de input do usuario
    const inputTarefa = document.getElementById("inputTarefa")   
    let tarefa = inputTarefa.value.trim()
    let mensagem = document.getElementById("mensagem")

    //Verificação da mensagem
    if (tarefa == "") {
    //Mensagem de erro caso a mensagem esteja vazia
    let mensagemErro = "Digite uma tarefa para poder adiciona-la!"
    mensagem.textContent = mensagemErro

    } else {
    //Mensagem de confirmação que a mensagem foi criada
    let mensagemSucesso = "Tarefa adicionada com sucesso!"
    mensagem.textContent = mensagemSucesso

    //Cria um novo item (li ) e insere na lista (lu)
    let listaTarefas = document.getElementById("listaTarefas")
    let novaTarefa = document.createElement("li") 
    novaTarefa.textContent = tarefa
    listaTarefas.appendChild(novaTarefa)
    }

    //Deixa o campo de preenchimento de tarefa vazio após clicar no botão
    inputTarefa.value = ""
}

//vermelho =  #a34743 verde #28a745 mensagem.textContent.style.color