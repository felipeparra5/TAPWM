function mostrarConfirmacao() {
    const cursoSelecionado = document.getElementById("cursos").value;
    const confirmacao = confirm("Deseja abrir a página do curso de " + cursoSelecionado + "?");

    if (confirmacao) {
        abrirJanelaCurso(cursoSelecionado);
    }
}

function abrirJanelaCurso(curso) {
    const largura = 600;
    const altura = 300;
    const left = (screen.width - largura) / 2;
    const top = (screen.height - altura) / 2;
    const janela = window.open("", curso, "width=" + largura + ", height=" + altura + ", left=" + left + ", top=" + top);
    
    let conteudo = "";

    if (curso === "design") {
        conteudo = "Curso de Design Gráfico na Fatec Sorocaba. Este curso aborda á area de prototição de tela e coisas relacionadas.";
    } else if (curso === "biologia") {
        conteudo = "Curso de Biologia na Fatec Sorocaba. Este curso foca na vida e habitate dos animais.";
    } else if (curso === "logistica") {
        conteudo = "Curso de Logística na Fatec Sorocaba. Este curso abrange logística de transporte, gestão de estoques e cadeia de suprimentos.";
    } else if (curso === "fortnite") {
        conteudo = "Curso de Fortnite na Fatec Sorocaba. kkkkkkkkkk não lembrei de nenhum outro curso, meu priminho tava jogando então coloquei.";
    }

    janela.document.write("<html><head><title>" + curso + "</title></head><body>" + conteudo + "</body></html>");
}