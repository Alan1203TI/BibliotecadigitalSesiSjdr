document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    main.innerHTML = '';  // Limpa o conteúdo atual

    // Adicionar opções ao menu de título e autor
    const menuTitulo = document.getElementById('menu-titulo');
    const menuAutor = document.getElementById('menu-autor');

    const titulos = [...new Set(livros.map(livro => livro.titulo))];
    const autores = [...new Set(livros.map(livro => livro.autor))];

    titulos.forEach(titulo => {
        const option = document.createElement('option');
        option.value = titulo;
        option.textContent = titulo;
        menuTitulo.appendChild(option);
    });

    autores.forEach(autor => {
        const option = document.createElement('option');
        option.value = autor;
        option.textContent = autor;
        menuAutor.appendChild(option);
    });

    // Exibir livros inicialmente
    livros.forEach(livro => {
        const div = document.createElement('div');
        div.className = 'book';
        div.innerHTML = `
            <div class="title">${livro.titulo}</div>
            <div class="author">${livro.autor}</div>
            <div class="edition">${livro.edicao}</div>
            <img src="${livro.capa}" alt="Capa do Livro">
            <div class="location">Prateleira: ${livro.prateleira}</div>
        `;
        main.appendChild(div);
    });

    // Função para buscar livros
    function buscarLivros(query, livros) {
        const filtrados = livros.filter(livro => {
            return livro.titulo.toLowerCase().includes(query.toLowerCase()) ||
                   livro.autor.toLowerCase().includes(query.toLowerCase());
        });
        exibirLivros(filtrados);
    }

    // Função para exibir livros
    function exibirLivros(filtrados) {
        main.innerHTML = '';  // Limpa o conteúdo atual
        filtrados.forEach(livro => {
            const div = document.createElement('div');
            div.className = 'book';
            div.innerHTML = `
                <div class="title">${livro.titulo}</div>
                <div class="author">${livro.autor}</div>
                <div class="edition">${livro.edicao}</div>
                <img src="${livro.capa}" alt="Capa do Livro">
                <div class="location">Prateleira: ${livro.prateleira}</div>
            `;
            main.appendChild(div);
        });
    }

    // Evento para capturar a digitação no campo de busca
    document.getElementById('search').addEventListener('input', (e) => {
        buscarLivros(e.target.value, livros);
    });

    // Evento para capturar a seleção do menu de título
    menuTitulo.addEventListener('change', (e) => {
        const query = e.target.value;
        buscarLivros(query, livros);
    });

    // Evento para capturar a seleção do menu de autor
    menuAutor.addEventListener('change', (e) => {
        const query = e.target.value;
        buscarLivros(query, livros);
    });
});
