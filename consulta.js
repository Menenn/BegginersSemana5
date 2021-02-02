var produtos = JSON.parse(localStorage.getItem('produtos'))

if(produtos == null){
    produtos = [];
}

var tabela = document.getElementById('tabela')

for (i = 0; i < produtos.length; i++) {
    var produto = produtos[i]
    var tipoprod = produto['tipoproduto']
    var nomeprod = produto['nomeproduto']
    var caracprod = produto['caracproduto']
    var numprod = produto['numproduto']

    var th = tabela.insertRow(1)
    var td = [th.insertCell(0), th.insertCell(1), th.insertCell(2), th.insertCell(3)]
    td[0].innerHTML = tipoprod
    td[1].innerHTML = nomeprod
    td[2].innerHTML = caracprod
    td[3].innerHTML = numprod
}

function limpar() {
    localStorage.clear(produtos);
    window.location.reload()
    console.log('passou aqui! :D');
}
