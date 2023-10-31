function inputDeBuscaClient() {

    const INPUT_BUSCA = document.getElementById('campoBusca');
    const TABELA_CLIENTES = document.getElementById('table').childNodes[1];


    INPUT_BUSCA.addEventListener('keyup', () => {

        let datas = INPUT_BUSCA.value.toUpperCase();
        let linhas = TABELA_CLIENTES.getElementsByTagName('tr');


        for (let posicao in linhas) {

            if (true === isNaN(posicao)) {
                continue;
            }

            let conteudoLinhas = linhas[posicao].innerHTML.toUpperCase();

            if (true === conteudoLinhas.includes(datas)) {
                linhas[posicao].style.display = '';
            } else {
                linhas[posicao].style.display = 'none';
            }
        }

    })

}

export default inputDeBuscaClient;