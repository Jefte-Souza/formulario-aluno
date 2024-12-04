const matricula = document.getElementById("matricula");
const erroMatri = document.getElementById("erroMatri");

const nome = document.getElementById("nome");
const erroNome = document.getElementById("erroNome");

const endereco = document.getElementById("endereco");
const erroEndereco = document.getElementById("erroEndereco");

const disci = document.getElementById("disci");
const erroDisci = document.getElementById("erroDisci");

const nota = document.getElementById("nota");
const erroNota = document.getElementById("erroNota");

const enviar = document.getElementById("enviar");

const resultado = document.getElementById("resultado");

let valorMatricula = matricula.value
let valorNome = nome.value
let valorDisci = disci.value
let valorEndereco = endereco.value.trim().toString()
let valorNota = nota.value
let situacao = ""

let validMatricula = false
let validNome = false;
let validEndereco = false;
let validDisciplina = false;
let validNota = false;


matricula.addEventListener('change', function() {
    valorMatricula = matricula.value.trim();  

    if (valorMatricula === "" || valorMatricula <= 0 || valorMatricula.length > 6) {
        erroMatri.style.visibility = "visible";
        matricula.style.borderColor = 'red';
        validMatricula = false
    } else {
        erroMatri.style.visibility = "hidden";
        matricula.style.borderColor = 'black';
        validMatricula = true;
    }
});


nome.addEventListener('change', function() {
    valorNome = nome.value.trim();
    valorNome = valorNome.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
    
    if (valorNome === '') {
        erroNome.style.visibility = "visible";
        nome.style.borderColor = 'red';
        validNome = false
    } else {
        erroNome.style.visibility = "hidden";
        nome.style.borderColor = 'black';
        validNome = true;
    }
});


endereco.addEventListener('change', function() {
    valorEndereco = endereco.value.trim().toString()
    
    if (valorEndereco === '') {
        erroEndereco.style.visibility = "visible";
        endereco.style.borderColor = 'red'
        validEndereco = false
    } else {
        erroEndereco.style.visibility = "hidden";
        endereco.style.borderColor = 'black'
        validEndereco = true;
    }
});


disci.addEventListener('blur', function() {
    if (disci.value === "Selecione a Disciplina") {
        erroDisci.style.visibility = "visible";
        disci.style.borderColor = 'red';
        validDisciplina = false
    } else {
            erroDisci.style.visibility = "hidden";
            disci.style.borderColor = 'black';
            valorDisci = disci.value
            validDisciplina = true;
    }
});


nota.addEventListener('change', function() {
    valorNota = parseInt(nota.value.trim(), 10);

    if (isNaN(valorNota) || valorNota < 0 || valorNota > 10) {
        erroNota.style.visibility = "visible";
        nota.style.borderColor = 'red';
        validNota = false
    } else {
        erroNota.style.visibility = "hidden";
        nota.style.borderColor = 'black';
        validNota = true;
    }
});



function situacaoNota() {
    if (valorNota >= 7) {
        return "Aprovado";
    } else if(valorNota >= 5){
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}


enviar.addEventListener('click' ,function(e) {
    e.preventDefault();
    let situacao = situacaoNota();

    if (validMatricula && validNome && validEndereco && validDisciplina && validNota) {

        let corSituacao = '';
        switch(situacao) {
            case 'Aprovado':
                corSituacao = 'green';
                break;
            case 'Recuperação':
                corSituacao = '#FFA500'; 
                break;
            case 'Reprovado':
                corSituacao = 'red';
                break;
        }

        let divResultado = `<div id="caixa" class="caixa">
            <p><strong>Matrícula:</strong> ${valorMatricula}</p>
            <p><strong>Nome:</strong> ${valorNome}</p>
            <p><strong>Endereço:</strong> ${valorEndereco}</p>
            <p><strong>Disciplina:</strong>  ${valorDisci}</p>
            <p><strong>nota:</strong>  ${valorNota}</p>
            <p><strong>Situação:</strong> <strong style="color: ${corSituacao}; font-size: 23px;">${situacao}</strong></p>
        </div> <br><br> `

        resultado.innerHTML = divResultado
    } else {
        resultado.innerHTML = ""
    }
})







