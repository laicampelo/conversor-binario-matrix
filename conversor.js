var valor="";

function enviar(){
    valor=document.querySelector('#usuario').value
    console.log(valor);
    conversor(valor)
}

function conversor(decimal){
    var binario ="";
    var result=document.querySelector('#resultado');
    let n = decimal;

    while(n > 0){

        n % 2 == 0?(binario = "0"+ binario): binario = "1"+ binario;

        n = Math.floor(n / 2);
	}
	result.innerHTML=(`A conversão de ${valor} é: <br><strong>${binario}`);
}


