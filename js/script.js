
document.getElementById("botaoEnviar").addEventListener("click", validarFormulario)

function validarFormulario() {

    if (document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("tel").value != "") {
        alert("Prontinho! Você receberá as novidades por email.")
    } else {
        alert("Por favor,preencha os campos de nome e email!")
    }
}