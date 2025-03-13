document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM carregado");

    if (!livros || !Array.isArray(livros)) {
        console.error("A variável 'livros' não está definida ou não é um array.");
        return;
    }

    const main = document.querySelector('main');
    if (!main) {
        console.error("O elemento 'main' não foi encontrado.");
        return;
    }

    main.innerHTML = '';  // Limpa o conteúdo atual

    const menuTitulo = document.getElementById('menu-titulo');
    const menuAutor = document.getElementById('menu-autor');
    if (!menuTitulo || !menuAutor) {
        console.error("Os elementos 'menu-titulo' ou 'menu-autor' não foram encontrados.");
        return;
    }

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

    // Função para exibir livros
    function exibirLivros(filtrados) {
        main.innerHTML = '';  // Limpa o conteúdo atual
        filtrados.forEach(livro => {
            const div = document.createElement('div');
            div.className = 'book';
            div.innerHTML = `
                <div class="title">${livro.titulo}</div>
                <div class="author">${livro.autor}</div>
                <img src="${livro.capa}" alt="Capa do Livro" class="book-cover">
                <div class="location">Prateleira: ${livro.prateleira}</div>
                <div class="resumo" style="display: none;">${livro.resumo}</div>
            `;
            main.appendChild(div);

            div.querySelector('.book-cover').addEventListener('click', () => {
                main.innerHTML = '';  // Limpa todos os livros
                const selectedBook = document.createElement('div');
                selectedBook.className = 'book';
                selectedBook.innerHTML = `
                    <div class="title">${livro.titulo}</div>
                    <div class="author">${livro.autor}</div>
                    <img src="${livro.capa}" alt="Capa do Livro" class="book-cover">
                    <div class="location">Prateleira: ${livro.prateleira}</div>
                    <div class="resumo">${livro.resumo}</div>
                    <button id="voltar">Voltar à lista de livros</button>
                `;
                main.appendChild(selectedBook);

                document.getElementById('voltar').addEventListener('click', () => {
                    exibirLivros(livros);
                });
            });
        });
    }

    // Função para buscar livros
    function buscarLivros(query, livros) {
        console.log(`Busca iniciada com query: ${query}`);
        const filtrados = livros.filter(livro => {
            return livro.titulo.toLowerCase().includes(query.toLowerCase()) ||
                   livro.autor.toLowerCase().includes(query.toLowerCase());
        });
        console.log(`Livros encontrados:`, filtrados);
        exibirLivros(filtrados);
    }

    // Exibir livros inicialmente
    exibirLivros(livros);

    menuTitulo.addEventListener('change', (e) => {
        console.log(`Título selecionado: ${e.target.value}`);
        const query = e.target.value;
        buscarLivros(query, livros);
    });

    menuAutor.addEventListener('change', (e) => {
        console.log(`Autor selecionado: ${e.target.value}`);
        const query = e.target.value;
        buscarLivros(query, livros);
    });
});
