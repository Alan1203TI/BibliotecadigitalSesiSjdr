document.addEventListener('DOMContentLoaded', () => {
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

    // Adicionar opções ao menu de título e autor
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

    // Exibir livros inicialmente
    livros.forEach(livro => {
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

        // Adiciona evento de clique à capa do livro para exibir apenas o livro selecionado e o resumo
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

            // Adiciona evento de clique ao botão "Voltar à lista de livros"
            document.getElementById('voltar').addEventListener('click', () => {
                exibirLivros(livros);
            });
        });
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
                <img src="${livro.capa}" alt="Capa do Livro" class="book-cover">
                <div class="location">Prateleira: ${livro.prateleira}</div>
                <div class="resumo" style="display: none;">${livro.resumo}</div>
            `;
            main.appendChild(div);

            // Adiciona evento de clique à capa do livro para exibir apenas o livro selecionado e o resumo
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

                // Adiciona evento de clique ao botão "Voltar à lista de livros"
                document.getElementById('voltar').addEventListener('click', () => {
                    exibirLivros(livros);
                });
            });
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
