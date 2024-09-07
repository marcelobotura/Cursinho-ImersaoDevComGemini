
function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultado-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let conteudo = "" 
    let disciplina = "";
    let tags = "";
    

 // Itera sobre cada dado da lista de dados
 for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    conteudo = dado.conteudo.toLowerCase()
    disciplina = dado.disciplina.toLowerCase()
    link = dado.link.toLowerCase()
    tags = dado.tags.toLowerCase()
    
    // se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || conteudo.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // cria um novo elemento
        resultados += `
         <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.conteudo}</p>
                <h4>${dado.disciplina}</h4>
                <a href=${dado.link}>Baixar PDF</a>
            </div>
    `;
    }
}

if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>"
}

// Atribui os resultados gerados à seção HTML
section.innerHTML = resultados;
}
