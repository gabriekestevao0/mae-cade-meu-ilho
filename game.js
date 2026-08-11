let jogoIniciado = false;

function começarJogo() {
    jogoIniciado = true;

    document.body.innerHTML = `
        <div id="jogo">

            <h1>Santa Aurora</h1>

            <div id="cena">
                <div id="helena"></div>
            </div>

            <div id="dialogo">
                <p>
                    Helena: "Meu filho... onde você está?"
                </p>
            </div>

            <div id="controles">
                <button onclick="mover('esquerda')">⬅️</button>
                <button onclick="mover('cima')">⬆️</button>
                <button onclick="mover('baixo')">⬇️</button>
                <button onclick="mover('direita')">➡️</button>
            </div>

        </div>
    `;
}

function mover(direcao) {

    const helena = document.getElementById("helena");

    if (!helena) return;

    let esquerda = parseInt(helena.style.left || "50");
    let topo = parseInt(helena.style.top || "50");

    if (direcao === "esquerda") {
        esquerda -= 5;
    }

    if (direcao === "direita") {
        esquerda += 5;
    }

    if (direcao === "cima") {
        topo -= 5;
    }

    if (direcao === "baixo") {
        topo += 5;
    }

    esquerda = Math.max(10, Math.min(90, esquerda));
    topo = Math.max(15, Math.min(75, topo));

    helena.style.left = esquerda + "%";
    helena.style.top = topo + "%";
}
