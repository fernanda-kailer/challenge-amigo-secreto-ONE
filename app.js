let listaDeParticipantes = [];

function adicionarAmigo() {
    let amigo = document.getElementById("amigo").value;

    if (amigo && !listaDeParticipantes.includes(amigo)) {
        listaDeParticipantes.push(amigo);
        atualizarLista();
        document.getElementById("amigo").value = "";
    } else {
        const msg = document.getElementById("mensagemErro");
        msg.textContent = "Nome inválido ou já inserido, por favor insira outro nome.";
        setTimeout(() => {
            msg.textContent = "";
        }, 5000); // desaparece após 5 segundos
    }
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < listaDeParticipantes.length; i++) {
        lista.innerHTML += "<li>" + listaDeParticipantes[i] + "</li>";
    }
}

function sortearAmigo() {
    console.log("Participantes:", listaDeParticipantes);

    if (listaDeParticipantes.length < 2) {
        const msg = document.getElementById("mensagemErro");
        msg.textContent = "Insira pelo menos dois nomes.";
        setTimeout(() => {
            msg.textContent = "";
        }, 5000); // desaparece após 5 segundos
        return;
    }

    let sorteados = [];
    let resultado = [];

    for (let participante of listaDeParticipantes) {
        let amigoSecreto;

        do {
            let indiceAleatorio = Math.floor(Math.random() * listaDeParticipantes.length);
            amigoSecreto = listaDeParticipantes[indiceAleatorio];
        } while (amigoSecreto === participante || sorteados.includes(amigoSecreto));

        sorteados.push(amigoSecreto);
        resultado.push(`${participante} tirou ${amigoSecreto}`);
    }

    // Exibe o resultado na <ul id="resultado">
    let resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = "";

    for (let frase of resultado) {
        let li = document.createElement("li");
        li.textContent = frase;
        resultadoUl.appendChild(li);
    }
}
