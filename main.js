
const form = document.getElementById('form')
const telefones = []
const nomes = []
let linhas = ''

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})
//Para chamar todas essas funções quando clicar no botão tipo submit


function adicionaLinha() {
    const inputNome = window.document.getElementById('nome')
    const inputTel = window.document.getElementById('telefone')

    if (telefones.includes(inputTel.value)){
        alert(`Telefone ${inputTel.value} já inserido!`);
    } else if (nomes.includes(inputNome.value)){
        alert(`Nome ${inputNome.value} já inserido`);
    } else {
        nomes.push(inputNome.value);
        telefones.push(inputTel.value);

        let linha = '<tr>';
        linha += `<td> ${inputNome.value} </td>`;
        linha += `<td> ${inputTel.value} </td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputTel.value = ''
    inputNome.value = ''
}

function atualizaTabela(){
    const corpotabela = document.querySelector('tbody')
    corpotabela.innerHTML = linhas
}

