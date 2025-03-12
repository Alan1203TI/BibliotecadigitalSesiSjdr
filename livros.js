const livros = [
    {
        titulo: "Cachinhos de Ouro",
        autor: "Recontado por Ana Maria Machado",
        edicao: "Edição Renovada",
        capa: "cachinhosdeouro.jpg",
        prateleira: "A3"
    },
    {
        titulo: "Ideias que rimam mais que palavras",
        autor: "Rashid",
        edicao: "1 Ed 2019",
        capa: "ideiasquerimammaisquepalavras.jpg",
        prateleira: "B2"
    },
    {
        titulo: "Janelas",
        autor: "Carmen Queralt",
        edicao: "Ed 2014",
        capa: "janelas2014.jpg",
        prateleira: "B2"
    },
    {
        titulo: "Lendas da Africa moderna",
        autor: "Heloisa Pires Lima e Rosa Maria Tavares Andrade",
        edicao: "Ed 2010",
        capa: "lendasdaafricamoderna.jpg",
        prateleira: "B2"
    },
    {
        titulo: "Quarto de desejo-Diário de uma favelada",
        autor: "Carolina Maria de Jesus",
        edicao: "Ed 2014",
        capa: "quartodedesejo.jpg",
        prateleira: "B2"
    },
    {
        titulo: "Que tem ai? O",
        autor: "Rosinha",
        edicao: "Ed 1 2018",
        capa: "quetemai.jpg",
        prateleira: "B2"
    },
    {
        titulo: "Todo mundo tem",
        autor: "Edith Derdik",
        edicao: "Ed 2012",
        capa: "todomundotem.jpg",
        prateleira: "B2"
    },
    {
        titulo: "A Casa dos muitos caminhos",
        autor: "Diana Wynne Jones",
        capa: "acasadosmuitoscaminhos.jpg",
        prateleira: "B2"
    },
    {
        titulo: "Minha vida fora de série",
        autor: "Edith Derdik",
        edicao: "5º Temporada",
        capa: "minhavidaforadeserie.jpg",
        prateleira: "B2"
    },
    {
        titulo: "Racionais Mc's",
        edicao: "Sobrevivendo no inferno",
        capa: "racionaismc.jpg",
        prateleira: "B2"
    },
    {
        titulo: "O Sol é para todos",
        autor: "Harper Lee",
        capa: "osoleparatodos.jpg",
        prateleira: "B2"
    },
    {
        titulo: "Os crimes ABC",
        autor: "Agatha Christie",
        capa: "oscrimesabc.jpg",
        prateleira: "B2"
    },
    {
        titulo: "Queria que você me visse",
        autor: "Emery Lord",
        capa: "queriaquevocemevisse.jpg",
        prateleira: "B2"
    },
    {
        titulo: "Assassinato no Expresso do Oriente",
        autor: "Agatha Christie",
        capa: "assassinatonoexpressodooriente.jpg",
        prateleira: "B2"
    },
    {
        titulo: "Um corpo na Biblioteca",
        autor: "Agatha Christie",
        capa: "umcorponabiblioteca.jpg",
        prateleira: "B2"
    },
    {
        titulo: "Até o verão terminar",
        autor: "Colleen Hoover",
        capa: "ateoveraoterminar.jpg",
        prateleira: "B2"
    },
    {
        titulo: "Enquanto houver limoeiros",
        autor: "Zoulfa Katouh",
        capa: "enquantohouverlimoeiros.jpg",
        prateleira: "B2"
    },
    {
        titulo: "O menino no alto na montanha",
        autor: "John Boyne",
        capa: "omeninonoaltodamontanha.jpg",
        prateleira: "B2"
    },
    {
        titulo: "O Natal de Hercule Poirot",
        autor: "Agatha Christie",
        capa: "nataldeherculeparrot.jpg",
        prateleira: "B2"
    },
    {
        titulo: "Amêndoas",
        autor: "Won-pyoug Sohn",
        capa: "amendoas.jpg",
        prateleira: "B2"
    },
    {
        titulo: "Um crime adormecido",
        autor: "Agatha Christie",
        capa: "umcrimeadormecido.jpg",
        prateleira: "B2"
    },
    {
        titulo: "Manual de Penteados para Crianças Negras",
        autor: "Joana Gabriela e Mari Santos",
        capa: "manualdospenteados.jpg",
        prateleira: "B2"
    },
    {
        titulo: "Morte na Mesopotâmia",
        autor: "Agatha Christie",
        capa: "mortenamesopotamia.jpg",
        prateleira: "B2"
    },
     {
        titulo: "Convite para um homicídio",
        autor: "Agatha Christie",
        capa: "conviteparaumhomicidio.jpg",
        prateleira: "B2"
    },
    {
        titulo: "Maus",
        autor: "---",
        capa: "maus.jpg",
        prateleira: "B2"
    },
    {
        titulo: "Tudo o que nunca fomos",
        autor: "Alice Kellen",
        edicao: "Duologia Deixe Acontecer - livro 1",
        capa: "tudooquenuncafomos.jpg",
        prateleira: "B2"
    },
    {
        titulo: "Caçadores de Códigos-o Farol Mal-assombrado",
        autor: "Penny Warner",
        capa: "cacadoresdecodigos.jpg",
        prateleira: "B2"
    },
    {
        titulo: "Amari e os Irmãos da noite",
        autor: "B.B.Alstone",
        capa: "amarieosirmaosdanoite.jpg",
        prateleira: "B2"
    },
    {
        titulo: "Diário de Pilar na África",
        autor: "Flávia Lins e Silva",
        capa: "diariodepilarnaafrica.jpg",
        prateleira: "B2"
    },
    {
        titulo: "Óculos de Cor-Ver e não enxergar",
        autor: "Lilia Moritz Schwarcz",
        capa: "oculosdecor.jpg",
        prateleira: "B2"
    },
    {
        titulo: "Ideias para adiar o fim do Mundo",
        autor: "Ailton Krenak",
        capa: "ideiasparaadiarofimdomundo.jpg",
        prateleira: "B2"
    },
    {
        titulo: "O perigo de um história única",
        autor: "Chimamanda Ngozi Adichie",
        capa: "operigodeumahistoriaunica.jpg",
        prateleira: "B2"
    },
    {
        titulo: "Lendário",
        autor: "Stephanie Garber",
        capa: "lendario.jpg",
        prateleira: "B2"
    }
    // Adicione mais livros aqui
];
