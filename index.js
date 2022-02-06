/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/




var botaoCriptografar = document.querySelector("#botao-cript");

botaoCriptografar.addEventListener("click", function() {
    var textoInserido = pegaTexto();

     devolveResultado(criptografa(textoInserido));
});

botaoDescriptografar = document.querySelector("#botao-descript");

botaoDescriptografar.addEventListener("click", function() {
    var textoInserido = pegaTexto();
    
    devolveResultado(descriptografa(textoInserido));
});

var botaoCopiar = document.querySelector("#copia");

botaoCopiar.addEventListener("click", function() {
    copiaResultado();
})

    function criptografa (texto) {
        var textoSeparado = texto.split("",texto.length); // quebra o texto em um aray
        console.log(textoSeparado);

        // percorre o array e compara 
        for (var i = 0; i<textoSeparado.length;i++) {
            if (textoSeparado[i] == "e") {
                textoSeparado[i] = "enter";
            }
            if (textoSeparado[i] == "i") {
                textoSeparado[i] = "imes";
            }
            if (textoSeparado[i] == "a") {
                textoSeparado[i] = "ai";
            }
            if (textoSeparado[i] == "o") {
                textoSeparado[i] = "ober";
            }
            if (textoSeparado[i] == "u") {
                textoSeparado[i] = "ufat";
            }
        };

        console.log(textoSeparado);

        var textoCripto = textoSeparado.join('');
        console.log(textoCripto);
        return textoCripto;

    }  

    function descriptografa(texto) {

        var ufat = /ufat/gi;
        var ober = /ober/gi;
        var ai = /ai/gi;
        var imes = /imes/gi;
        var enter = /enter/gi;
      
        var textoDescripto = texto.replace(ufat, "u").replace(ober, 'o').replace(ai, 'a').replace(imes, 'i').replace(enter, 'e');

        return textoDescripto;
     
    };

    function pegaTexto() {
        var textoInserido = document.querySelector("#input-entrada");
        var textoInserido = (textoInserido.value);
        return textoInserido;
    }; 
 
    function devolveResultado(resultado) {
        inputResultado = document.querySelector("#input-saida");
        inputResultado.value = resultado;
    }

    function copiaResultado() {
        var resultado = document.getElementById("input-saida");
        resultado.select();
        document.execCommand("copy");
    }