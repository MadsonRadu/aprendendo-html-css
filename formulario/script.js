// Captura o formulário pelo ID e adiciona um evento de envio
document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    // Previne o envio do formulário antes da validação
    event.preventDefault();

    // Obtém o valor da data de nascimento digitada pelo usuário
    let dataNascimento = document.getElementById("dataNascimento").value;

    // Chama a função para validar a data de nascimento
    if (!validarDataNascimento(dataNascimento)) {
        alert("Data de nascimento inválida!");
        return;
    }

    // Se passar pela validação, exibe a mensagem de sucesso
    alert("Cadastro realizado com sucesso!");

    // Limpa os campos do formulário
    document.getElementById("cadastroForm").reset();
});
function alertar(){
    alert("Este é um formulário destinado a objetivos educacionais.")

}

(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()




/*
let cpf=document.getElementById("cpf").value;
if(!validarcpf(cpf)){
    alert("cpf invalido")
    return;
}
function validarCPF(cpf){
    cpf = cpf.replace(/[^\d]+/g, '');
    if(cpf.lenght ==!11 || /^(\d)\1{10}$/){
        alert("CPF invalido!")
    }
     

}

/**
 * Função para validar a data de nascimento
 * @param {string} data - Data de nascimento fornecida pelo usuário
 * @returns {boolean} - Retorna verdadeiro se a data for válida, falso caso contrário
 */
function validarDataNascimento(data) {
    // Converte a string da data para um objeto Date
    let dataNascimento = new Date(data);

    // Obtém a data atual para comparação
    let dataAtual = new Date();

    // Verifica se a data de nascimento é no futuro
    if (dataNascimento > dataAtual) {
        return false;
    }

    return true;
}