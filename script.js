function adicionarponto() {
              
    var serie = document.getElementById("numprod")
       if(serie.value.length == 3){
           serie.value += "."
       }
 }

var produtos = [];

var produtos = JSON.parse(localStorage.getItem("produtos"));

if(produtos == null){
      produtos = [];
}

function setar(){
    produtos.push({
	    'tipoproduto': document.getElementById('tipoprod').value,
    	'nomeproduto': document.getElementById('nomeprod').value,
	    'caracproduto': document.getElementById('caracprod').value,
	    'numproduto': document.getElementById('numprod').value
    });

    var json_produtos = JSON.stringify(produtos)
    localStorage.setItem("produtos", json_produtos);
}