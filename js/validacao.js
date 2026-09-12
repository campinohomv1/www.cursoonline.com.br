const certificados = [

    {
        codigo: "CURSO-2026-000157",
        aluno: "João da Silva",
        curso: "Desenvolvimento Web",
        cargaHoraria: "120 horas",
        conclusao: "12/09/2026",
        instituicao: "Sua Instituição"
    },

    {
        codigo: "CURSO-2026-000158",
        aluno: "Maria Oliveira",
        curso: "Informática Profissional",
        cargaHoraria: "80 horas",
        conclusao: "10/09/2026",
        instituicao: "Sua Instituição"
    }

];


function validarCertificado() {

    const codigo = document
        .getElementById("codigo")
        .value
        .trim()
        .toUpperCase();

    const resultado = document.getElementById("resultado");


    if (codigo === "") {

        resultado.innerHTML = `
            <div class="erro">
                <h3>⚠️ Digite um código</h3>

                <p>
                    Informe o código de autenticação
                    do certificado.
                </p>
            </div>
        `;

        return;
    }


    const certificado = certificados.find(
        item => item.codigo === codigo
    );


    if (certificado) {

        resultado.innerHTML = `

            <div class="sucesso">

                <h3>✅ Certificado válido</h3>

                <p>
                    <strong>Código:</strong>
                    ${certificado.codigo}
                </p>

                <p>
                    <strong>Aluno:</strong>
                    ${certificado.aluno}
                </p>

                <p>
                    <strong>Curso:</strong>
                    ${certificado.curso}
                </p>

                <p>
                    <strong>Carga horária:</strong>
                    ${certificado.cargaHoraria}
                </p>

                <p>
                    <strong>Conclusão:</strong>
                    ${certificado.conclusao}
                </p>

                <p>
                    <strong>Instituição:</strong>
                    ${certificado.instituicao}
                </p>

            </div>

        `;

    } else {

        resultado.innerHTML = `

            <div class="erro">

                <h3>❌ Certificado não encontrado</h3>

                <p>
                    O código informado não corresponde
                    a nenhum certificado cadastrado.
                </p>

            </div>

        `;
    }
}