// ======================================
// CONFIGURAÇÕES
// ======================================

// COLOQUE AQUI SUA CHAVE PIX
const CHAVE_PIX = "31971705564";


// COLOQUE AQUI SEU NÚMERO DO WHATSAPP
// Somente números.
// Exemplo: 5534999999999

const WHATSAPP =
    "31998392353";


// ======================================
// VARIÁVEIS
// ======================================

let cursoSelecionado = "";

let valorSelecionado = "";


// ======================================
// ABRIR PAGAMENTO
// ======================================

function comprarCurso(nome, valor) {

    cursoSelecionado = nome;

    valorSelecionado = valor;


    // Nome do curso

    document.getElementById(
        "pixNomeCurso"
    ).textContent = nome;


    // Valor

    document.getElementById(
        "pixValor"
    ).textContent = "R$ " + valor;


    // Chave PIX

    document.getElementById(
        "chavePix"
    ).value = CHAVE_PIX;


    // Criar mensagem do WhatsApp

    const mensagem =
        `Olá! Acabei de realizar o pagamento do curso "${nome}" no valor de R$ ${valor}. Gostaria de enviar o comprovante e receber as informações de acesso.`;

    
    const linkWhatsApp =
        "https://wa.me/" +
        WHATSAPP +
        "?text=" +
        encodeURIComponent(mensagem);


    document.getElementById(
        "btnComprovante"
    ).href = linkWhatsApp;


    // Mostrar modal

    document.getElementById(
        "modalPix"
    ).style.display = "flex";


    // Impedir rolagem da página

    document.body.style.overflow = "hidden";

}


// ======================================
// FECHAR PIX
// ======================================

function fecharPix() {

    document.getElementById(
        "modalPix"
    ).style.display = "none";


    document.body.style.overflow = "auto";

}


// ======================================
// CLICAR FORA DO MODAL
// ======================================

document.getElementById(
    "modalPix"
).addEventListener(
    "click",
    function(event) {

        if (event.target === this) {

            fecharPix();

        }

    }
);


// ======================================
// COPIAR CHAVE PIX
// ======================================

function copiarPix() {

    const campo =
        document.getElementById("chavePix");


    const chave =
        campo.value;


    if (!chave ||
        chave === "SUA-CHAVE-PIX-AQUI") {

        alert(
            "Configure sua chave PIX no arquivo script.js."
        );

        return;

    }


    // Método moderno

    if (
        navigator.clipboard &&
        window.isSecureContext
    ) {

        navigator.clipboard
            .writeText(chave)
            .then(function() {

                mostrarCopiado();

            })
            .catch(function() {

                copiarAlternativo(chave);

            });

    } else {

        copiarAlternativo(chave);

    }

}


// ======================================
// MÉTODO ALTERNATIVO DE CÓPIA
// ======================================

function copiarAlternativo(chave) {

    const textarea =
        document.createElement("textarea");


    textarea.value = chave;

    textarea.style.position =
        "fixed";

    textarea.style.opacity = "0";


    document.body.appendChild(
        textarea
    );


    textarea.select();


    try {

        document.execCommand(
            "copy"
        );

        mostrarCopiado();

    } catch (erro) {

        alert(
            "Não foi possível copiar automaticamente. Copie a chave manualmente."
        );

    }


    document.body.removeChild(
        textarea
    );

}


// ======================================
// MENSAGEM DE COPIADO
// ======================================

function mostrarCopiado() {

    const botao =
        document.querySelector(
            ".chave-box button"
        );


    const textoOriginal =
        botao.innerHTML;


    botao.innerHTML =
        '<i class="fa-solid fa-check"></i> COPIADO';


    botao.style.background =
        "#25a244";


    setTimeout(function() {

        botao.innerHTML =
            textoOriginal;

        botao.style.background =
            "#111820";

    }, 2000);

}


// ======================================
// ESC - FECHAR MODAL
// ======================================

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            fecharPix();

        }

    }
);