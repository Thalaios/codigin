let tarefas = []


//Aciona a função adicionar tarefa caso clique no botão
function adicionarTarefa() {

    //Recebe o valor de input do usuario
    const inputTarefa = document.getElementById("inputTarefa")   
    let tarefa = inputTarefa.value.trim() // Retira todos os espaços para verificar se a mensagem é valida

    let mensagem = document.getElementById("mensagem")
    mensagem.className = "mensagem"

    //Verificação da mensagem
    if (tarefa == "") {
        //Mensagem de erro caso a mensagem esteja vazia
        mensagem.textContent = "Digite uma tarefa para poder adiciona-la!"
        mensagem.style.color =  "#a34743"
    } else {
        //Mensagem de confirmação que a mensagem foi criada
        mensagem.textContent = "Tarefa adicionada com sucesso!"
        mensagem.style.color =  "#28a745"
        tarefas.push(tarefa)
        salvarTarefasNoLocalStorage()
        renderizarTarefas() 
        renderizarBotaoLimpar()
}

//Deixa o campo de preenchimento de tarefa vazio após clicar no botão
inputTarefa.value = ""
renderizarBotaoLimpar()
renderizarBotaoOrdenar();
}

function renderizarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML = ""

    //Cria um novo item (li ) e insere na lista (lu)
    
    for (let i = 0; i < tarefas.length; i++) {
        let novaTarefa = document.createElement("li") 

        let textoTarefas = document.createElement("span")
            textoTarefas.textContent = tarefas[i]
            textoTarefas.className = "texto"

        let botoes= document.createElement("div");
            botoes.className = "botoes"

        let botaoRemover = document.createElement("button");
            botaoRemover.className = "remover";
            botaoRemover.textContent = "Remover";
            botaoRemover.onclick = () => removerTarefa(i);
        
       let botaoEditar = document.createElement("button");
            botaoEditar.className = "editar";
            botaoEditar.textContent = "Editar";
            botaoEditar.onclick = () => editarTarefa(i);

        botoes.appendChild(botaoEditar)
        botoes.appendChild(botaoRemover)

        novaTarefa.appendChild(textoTarefas);
        novaTarefa.appendChild(botoes);
        listaTarefas.appendChild(novaTarefa);
    }
}

function removerTarefa(i) {
    tarefas.splice(i, 1)
    salvarTarefasNoLocalStorage()
    renderizarTarefas()
    renderizarBotaoOrdenar();
    } 

function editarTarefa(i) {
    let tarefaEditada = prompt("Edite sua tarefa")
    if (tarefaEditada.trim() !== "") {
        tarefas[i] = tarefaEditada;
        salvarTarefasNoLocalStorage()
        renderizarTarefas();
    } ;
}

function renderizarBotaoLimpar() {
    const botoesExtras = document.getElementById("botoesExtras")
    botoesExtras.className = "botao_lista";
    botoesExtras.innerHTML = "";

    if (tarefas.length > 0) {
        const limparLista = document.createElement("button");
        limparLista.textContent = "Limpar lista";
        limparLista.onclick = limpar;
        botoesExtras.appendChild(limparLista);
    } else {
        botoesExtras.innerHTML = "";
    }
}

function renderizarBotaoOrdenar() {
    const divOrdenar = document.getElementById("botaoOrdenar")
    divOrdenar.className = "botaoOrdenar";
    divOrdenar.innerHTML = "";

    if (tarefas.length > 0) {
        const botao = document.createElement("button");
        botao.innerHTML = '<i class="fas fa-sort-alpha-down"></i>';
        botao.onclick = ordenarTarefas
        divOrdenar.appendChild(botao);
}}

function ordenarTarefas() {
    tarefas.sort((a, b) => a.localeCompare(b));
    renderizarTarefas();
    salvarTarefasNoLocalStorage();
}

function limpar() {
    tarefas = [];
    salvarTarefasNoLocalStorage()
    renderizarTarefas();
    renderizarBotaoLimpar()
    renderizarBotaoOrdenar();
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = "Lista de tarefas limpa com sucesso!";
    mensagem.style.color = "#28a745";
};

function salvarTarefasNoLocalStorage() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
};

function carregarTarefasDoLocalStorage() {
    const tarefasSalvas = localStorage.getItem("tarefas");
    if (tarefasSalvas) {
        tarefas = JSON.parse(tarefasSalvas);
        renderizarTarefas();
        renderizarBotaoLimpar();
        renderizarBotaoOrdenar();
    }
}
carregarTarefasDoLocalStorage(); // Chamada ao carregar

document.getElementById("inputTarefa").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});