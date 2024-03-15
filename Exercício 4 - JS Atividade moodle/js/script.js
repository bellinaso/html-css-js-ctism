// 1) Desenvolva uma função em Java Script que determine se um número é primo ou não. Imprima a resposta na interface HTML.

function primo()
{
    var numero = Number(document.getElementById("num1").value);
    var cont = 0;

    for (i=1; i<10; i++) {

        if (numero % i == 0) {
            cont++;
        }
    }
    if (cont > 2) {
        document.getElementById("resultado").innerText = "O número é: não primo!";
    }
    else if (cont <=2) {
        document.getElementById("resultado").innerText = "O número é: primo!";
    }
}


// 2) Escreva um algoritmo que leia um peso na Terra e o número de um planeta e imprima o valor do seu peso neste planeta. A relação de planetas é dada a seguir juntamente com o valor das gravidades relativas à Terra:

// PesoPlanetaEscolhido = PesoNaTerra/10 * gravidadeNoPlaneta

// Gravidade 1 - 0.37 - Mercúrio
// Gravidade 2 - 0.88 - Vênus
// Gravidade 3 - 0.38 - Marte
// Gravidade 4 - 2.64 - Júpiter
// Gravidade 5 - 1.15 - Saturno
// Gravidade 6 - 1.17 - Urano

function calcPeso()
{
    
    try {
        peso = Number(document.getElementById("peso").value);
        planeta = document.querySelector('input[name="planeta"]:checked').value;

        switch (planeta) {
            case 'mercurio':
                peso = peso/10*0.37;
                break;        
            case 'venus':
                peso = peso/10*0.88;
                break;        
            case 'marte':
                peso = peso/10*0.38;
                break;        
            case 'jupiter':
                peso = peso/10*2.64;
                break;        
            case 'saturno':
                peso = peso/10*1.15;
                break;        
            case 'urano':
                peso = peso/10*1.17;
                break;        
        }
        document.getElementById("novoPeso").innerText = `O novo peso é ${Number(peso.toFixed(2))} newtons`;
    }
    catch{
        alert("Selecione uma opção válida.");
    }
}


// 3) Em um restaurante Self-Service, o preço do quilo custa R$ 20,00, o do refri ou água R$ 4,00 e o da cerveja R$ 12,00. Crie um algoritmo que leia o nome do cliente, o peso do prato e a quantidade de bebidas e calcule o valor total da conta que o cliente irá pagar [ valor da conta = bebida + (peso * 20) ]. Imprima na forma de nota fiscal a conta do cliente.

function selecionado()
{
    const bebida = document.getElementsByName("bebida");
    const quantidade = document.getElementsByName("quantidade");
    for(var i=0; i<bebida.length; i++) {
        if(bebida[i].checked == true) {
            quantidade[i].removeAttribute("disabled");
        }
        else {
            quantidade[i].setAttribute("disabled", true);
            quantidade[i].value = null;
            quantidade[i].setAttribute("placeholder","Quantidade")
        }
    }
}

function calcPrato()
{
    var quantRefri = Number(document.getElementById("quantidadeRefri").value);
    var quantCerveja = Number(document.getElementById("quantidadeCerveja").value);
    var pesoPrato = Number(document.getElementById("pesoPrato").value);
    
    var preco = Number((pesoPrato*20/1000)+(quantRefri*4)+(quantCerveja*12));
    document.getElementById("preco").innerText = `Preço: R$ ${preco.toFixed(2)}`;
}