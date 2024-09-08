function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado.</p>"
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
                <p class="conteudo-meta">${dado.conteudo}</p>
                <h4>${dado.disciplina}</h4>
                <a href="#" onclick="baixarEVisitar('${dado.link}'); return false;">Baixar PDF</a>
                
            </div>
    `;
    }
}
//<a href=${dado.link}>Baixar PDF</a>
if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>"
}

// Atribui os resultados gerados à seção HTML
section.innerHTML = resultados;

}


// Obtém o elemento do campo de pesquisa
const campoPesquisa = document.getElementById("campo-pesquisa");

// Adiciona um ouvinte de evento para o evento 'keyup'
campoPesquisa.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        pesquisar();
    }
});


function baixarEVisitar(url) {
    // Cria um elemento de link temporário para iniciar o download
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop(); // Define o nome do arquivo para download
    document.body.appendChild(link);
    link.click(); // Simula o clique para baixar o arquivo
    document.body.removeChild(link); // Remove o link temporário do DOM

    // Redireciona para a página de exemplo após o download
    setTimeout(function() {
        window.location.href = 'pdfexemplo.html'; // Redireciona para a página pdfexemplo.html
    }, 100); // Aguarda 500ms para garantir o início do download
}

