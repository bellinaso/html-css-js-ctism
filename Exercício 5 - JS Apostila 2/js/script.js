    // Exercício 1
    // 1. Considerando o formulário abaixo, faça uma função JavaScript que valida os campos para os seguintes critérios:
    // •	 todos os campos são obrigatórios
    // •	 o nome do usuário deve ter no mínimo 8 caracteres
    // •	 a senha deve conter no mínimo 6 caracteres
    // •	 os campos senha e senhaconf devem possuir o mesmo valor
    // Mostrar alertas para o usuário para cada inconsistência encontrada

    function verificarCampos() {
        var cadastro = [document.getElementById("userName").value, document.getElementById("userPass").value, document.getElementById("userPassConf").value];

        if (cadastro[0].length < 8) {
            document.getElementById("confirm").innerText = "O nome requer no mínimo 8 caracteres.";
        }
        else if (cadastro[1].length < 6) {
            document.getElementById("confirm").innerText = "A senha requer no mínimo 6 caracteres.";
        }
        else if (cadastro[1] != cadastro[2]) {
            document.getElementById("confirm").innerText = "As senhas não coincidem.";
        }
        else {
            document.getElementById("confirm").innerText = "Verificação validada.";
        }
        for (var i = 0; i < cadastro.length; i++) {
            if (cadastro[i] == '') {
                document.getElementById("confirm").innerText = "Verifique se todos os campos estão preenchidos.";
            }
        }

    }

    // Exercício 2
    // 2. Dado um formulário com um campo para informar o e-mail, faça uma função JavaScript que verifica o e-mail para os seguintes critérios:
    // •	 campo é de preenchimento obrigatório
    // •	 e-mail deve possuir no mínimo 6 caracteres
    // •	 e-mail deve possuir o caractere @
    // •	 e-mail deve possuir o caractere . (ponto)
    // Crie um formulário para usar a função

    function verificarEmail() {
        var email = document.getElementById("userEmail").value;

        if (email != '' && email.length > 6) {
            // for(var i=0; i<email.length; i++) {
            //     if (email.split()[i] == '@' || email.split()[i] == '.') {

            //     }
            // }
            if (email.indexOf('@') >= 0 && email.indexOf('.') >= 0) {
                document.getElementById("confirmEmail").innerText = "Verificação validada.";
            }
            else {
                document.getElementById("confirmEmail").innerText = 'Verifique se o endereço contém "@" ou ".".';
            }
        }
        else {
            document.getElementById("confirmEmail").innerText = "O campo está vazio ou tem menos de 6 caracteres.";
        }
    }

    // Exercício 3
    // Faça uma função JavaScript que recebe por parâmetro uma data e retorna o dia da semana por extenso (Domingo, Segunda-feira, Terça-feira, ...). Mostre um exemplo de uso da função.

    function diaDaSemana() {
        const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
        var data = document.getElementById("data").value;

        document.getElementById("diaDaSemana").innerText = `${data} é no dia ${diasDaSemana[new Date(data).getDay()]}`;
    }

    // Exercício 4
    // Faça uma função JavaScript que recebe por parâmetro uma data e retorna o mês por extenso. Mostre um exemplo de uso da função.

    function mesDoAno() {
        const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        var data = document.getElementById("data2").value;

        document.getElementById("nomeDoMes").innerText = `${data} é no mês de ${mesesDoAno[new Date(data).getMonth()]}`;
    }

window.addEventListener("DOMContentLoaded", () => {

    // Exercício 5
    // Faça uma função JavaScript que retorna a data atual e uma saudação no seguinte formato: 14/06/2011 - Boa noite!

    var data = new Date();
    var diaHoje = data.getDate();
    var mesHoje = data.getMonth() + 1;
    var anoHoje = data.getFullYear();
    var horaAgora = data.getHours();

    document.getElementById("diaDeHoje").innerText = `Hoje é ${diaHoje}/${mesHoje}/${anoHoje}`;
    if (horaAgora < 12) {
        document.getElementById("diaDeHoje").append(" - Bom dia");
    }
    else if (horaAgora < 18) {
        document.getElementById("diaDeHoje").append(" - Boa tarde");
    }
    else {
        document.getElementById("diaDeHoje").append(" - Boa noite");
    }

});

// Exercício 6
// Dado o formulário abaixo, faça uma função que calcule o gasto calórico considerando o peso, a atividade desenvolvida e o tempo que a atividade foi realizada. Mostre o gasto calórico na div mensagem. Considere a seguinte fórmula para o cálculo:

function calcCal()
{
    var peso = document.getElementById("peso").value;
    var exercicio = document.querySelector('input[name="exercicio"]:checked').value;
    var tempo = document.getElementById("tempo").value;

    document.getElementById("calorias").innerText = `O gasto calorico foi de: ${peso*tempo*exercicio*0.0175}kCal`;
}