function validarFormulario() {
    const form = document.forms.meuForm;
    const nome = form.nome.value;
    const email = form.email.value;
    const comentario = form.comentario.value;
    const pesquisa = form.pesquisa.value;

    if (nome.length < 10) {
        alert("Nome deve ter pelo menos 10 caracteres.");
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Email deve conter '@' e '.'.");
        return false;
    }

    if (comentario.length < 20) {
        alert("Comentário deve ter pelo menos 20 caracteres.");
        return false;
    }

    if (pesquisa !== "sim" && pesquisa !== "nao") {
        alert("Por favor, escolha uma opção para a pesquisa.");
        return false;
    }
 
    if (pesquisa === "sim") {
        alert("Que bom que você voltou a visitar esta página!");
    } else {
        alert("Volte sempre a esta página!");
    }
}