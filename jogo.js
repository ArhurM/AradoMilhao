let perguntaAtualIndex = 0;
let perguntasRodada = [];
let pulosRestantes = 3;

// Tabelas de Premiações
const PREMIOS = [
    { errar: "0", parar: "0", acertar: "1 MIL" },
    { errar: "500", parar: "1 MIL", acertar: "2 MIL" },
    { errar: "1 MIL", parar: "2 MIL", acertar: "3 MIL" },
    { errar: "1.5 MIL", parar: "3 MIL", acertar: "4 MIL" },
    { errar: "2 MIL", parar: "4 MIL", acertar: "5 MIL" },
    { errar: "2.5 MIL", parar: "5 MIL", acertar: "10 MIL" },
    { errar: "5 MIL", parar: "10 MIL", acertar: "20 MIL" },
    { errar: "10 MIL", parar: "20 MIL", acertar: "30 MIL" },
    { errar: "15 MIL", parar: "30 MIL", acertar: "40 MIL" },
    { errar: "20 MIL", parar: "40 MIL", acertar: "50 MIL" },
    { errar: "25 MIL", parar: "50 MIL", acertar: "100 MIL" },
    { errar: "50 MIL", parar: "100 MIL", acertar: "200 MIL" },
    { errar: "100 MIL", parar: "200 MIL", acertar: "300 MIL" },
    { errar: "150 MIL", parar: "300 MIL", acertar: "400 MIL" },
    { errar: "200 MIL", parar: "400 MIL", acertar: "500 MIL" },
    { errar: "0", parar: "500 MIL", acertar: "1 MILHÃO" }
];

// --- GERENCIAMENTO DE ÁUDIO ---
const somIntro = new Audio('sounds/intro.mp3');
const somFundo = new Audio('sounds/fundo.mp3');
const somAcertou = new Audio('sounds/acertou.mp3');
const somErrou = new Audio('sounds/errou.mp3');

somFundo.loop = true; // Define o som de fundo para repetir continuamente

function aplicarConfiguracoes() {
    const config = JSON.parse(localStorage.getItem('showMilhaoConfig')) || {
        mutar: false, volFundo: 0.5, volEfeitos: 0.8, tema: 'classico'
    };

    // Configurar Volumes baseado nas escolhas da página opcoes.html
    const m = config.mutar ? 0 : 1;
    somIntro.volume = config.volFundo * m;
    somFundo.volume = config.volFundo * m;
    somAcertou.volume = config.volEfeitos * m;
    somErrou.volume = config.volEfeitos * m;

    // Aplicar as Paletas de Cores Combinatórias Escolhidas
    const r = document.documentElement.style;
    if (config.tema === 'classico') {
        r.setProperty('--bg-body', '#000044');
        r.setProperty('--bg-container', 'radial-gradient(circle, #000099 0%, #000033 100%)');
        r.setProperty('--border-container', '#0000bb');
        r.setProperty('--box-pergunta', 'linear-gradient(180deg, #e60000 0%, #990000 50%, #cc0000 100%)');
    } else if (config.tema === 'noturno') {
        r.setProperty('--bg-body', '#0d0d1a');
        r.setProperty('--bg-container', 'radial-gradient(circle, #220033 0%, #050510 100%)');
        r.setProperty('--border-container', '#440066');
        r.setProperty('--box-pergunta', 'linear-gradient(180deg, #3a005c 0%, #1a0033 100%)');
    } else if (config.tema === 'cyberpunk') {
        r.setProperty('--bg-body', '#121214');
        r.setProperty('--bg-container', 'linear-gradient(135deg, #1f1f23 0%, #000000 100%)');
        r.setProperty('--border-container', '#00ffff');
        r.setProperty('--box-pergunta', 'linear-gradient(180deg, #2b2b31 0%, #141416 100%)');
    }
}

// Fluxo de Inicialização de Sons
function gerenciarSonsIniciais() {
    aplicarConfiguracoes();
    
    // Tocar introdução. Quando ela terminar, inicia o som de fundo automaticamente.
    somIntro.play().catch(() => {
        // Bloqueio de segurança do navegador contra autoplay. 
        // Se falhar, tentamos iniciar o fundo na primeira interação do usuário na tela.
        window.addEventListener('click', iniciarMusicaNoClique, { once: true });
    });

    somIntro.onended = () => {
        somFundo.play().catch(e => console.log("Erro som de fundo:", e));
    };
}

function iniciarMusicaNoClique() {
    somIntro.play().catch(() => {
        somFundo.play();
    });
}

function iniciarJogo() {
    perguntasRodada = BANCO_PERGUNTAS.geral;
    perguntaAtualIndex = 0;
    pulosRestantes = 3;
    document.querySelectorAll('.help-card').forEach(el => el.classList.remove('used'));
    carregarPergunta();
}

function carregarPergunta() {
    const q = perguntasRodada[perguntaAtualIndex];
    document.getElementById("questionText").innerText = q.pergunta;

    const optionsContainer = document.getElementById("optionsContainer");
    optionsContainer.innerHTML = "";

    q.opcoes.forEach((opcaoText, index) => {
        const btn = document.createElement("div");
        btn.className = "red-box option-btn";
        btn.onclick = () => responder(index, btn); // Passa o botão clicado para aplicar efeitos
        btn.innerHTML = `
            <div class="option-num">${index + 1}</div>
            <div>${opcaoText}</div>
        `;
        optionsContainer.appendChild(btn);
    });
    atualizarPlacar();
}

function atualizarPlacar() {
    const p = PREMIOS[perguntaAtualIndex];
    document.getElementById("valErrar").innerText = p.errar;
    document.getElementById("valParar").innerText = p.parar;
    document.getElementById("valAcertar").innerText = p.acertar;
}

function responder(indice, elementoClicado) {
    const q = perguntasRodada[perguntaAtualIndex];
    
    // Desabilita cliques temporários nas alternativas para evitar cliques duplos durante a animação
    document.querySelectorAll('.option-btn').forEach(btn => btn.style.pointerEvents = 'none');

    if (indice === q.correta) {
        // --- COMPORTAMENTO DE ACERTO ---
        somAcertou.play().catch(e => console.log(e));
        elementoClicado.classList.add('pisca-verde');

        // Aguarda 1 segundo da animação antes de avançar
        setTimeout(() => {
            elementoClicado.classList.remove('pisca-verde');
            if (perguntaAtualIndex === PREMIOS.length - 1) {
                alert("PARABÉNS! VOCÊ GANHOU 1 MILHÃO DE REAIS!");
                reiniciarFluxoSons();
                iniciarJogo();
            } else {
                perguntaAtualIndex++;
                carregarPergunta();
            }
        }, 1000);

    } else {
        // --- COMPORTAMENTO DE ERRO ---
        somFundo.pause(); // Pausa a trilha de fundo para destacar o som do erro
        somErrou.play().catch(e => console.log(e));
        elementoClicado.classList.add('pisca-vermelho');

        // Aguarda 1.2 segundos (tempo da piscada) antes de dar o aviso e expor o prêmio levado
        setTimeout(() => {
            elementoClicado.classList.remove('pisca-vermelho');
            alert(`VOCÊ ERROU! Levou para casa R$ ${PREMIOS[perguntaAtualIndex].errar}`);
            reiniciarFluxoSons();
            iniciarJogo();
        }, 1200);
    }
}

function pararJogo() {
    somFundo.pause();
    alert(`VOCÊ PAROU! Levou para casa R$ ${PREMIOS[perguntaAtualIndex].parar}`);
    reiniciarFluxoSons();
    iniciarJogo();
}

function reiniciarFluxoSons() {
    somIntro.currentTime = 0;
    somFundo.currentTime = 0;
    gerenciarSonsIniciais();
}

function usarPulo(e) {
    if (pulosRestantes > 0 && !e.currentTarget.classList.contains('used')) {
        pulosRestantes--;
        e.currentTarget.classList.add('used');
        perguntaAtualIndex++;
        carregarPergunta();
    }
}

function usarAjuda(tipo, e) {
    if (e.currentTarget.classList.contains('used')) return;
    const q = perguntasRodada[perguntaAtualIndex];

    if (tipo === 'cartas') {
        const eliminadas = Math.floor(Math.random() * 3);
        alert(`As cartas eliminaram ${eliminadas} alternativa(s) errada(s)!`);
        esconderOpcoesIncorretas(q.correta, eliminadas);
    } else if (tipo === 'placas') {
        alert(`Placas da Plateia:\nAlternativa ${q.correta + 1} recebeu 65% dos votos!`);
    } else if (tipo === 'convidados') {
        alert(`Convidados acham que a resposta correta é a alternativa ${q.correta + 1}.`);
    }
    e.currentTarget.classList.add('used');
}

function esconderOpcoesIncorretas(correta, qtd) {
    const btns = document.querySelectorAll('.option-btn');
    let ocultadas = 0;
    btns.forEach((btn, idx) => {
        if (idx !== correta && ocultadas < qtd) {
            btn.style.visibility = "hidden";
            ocultadas++;
        }
    });
}

// Inicializações ao carregar a página index
window.onload = () => {
    gerenciarSonsIniciais();
    iniciarJogo();
};
