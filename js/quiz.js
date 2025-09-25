const questions = [
        {
            text: "O Código de Conduta do Google, 'Code of Conduct', substituiu o lema 'Don't be evil' por qual nova abordagem?",
            answer: "Do the right thing",
            options: ["Connect the world", "Make the world a better place", "Do the right thing", "Organize all information"],
            dica: "Pense na transição de uma filosofia passiva ('Não seja mau') para uma mais ativa e proativa."
        },
        {
            text: "Qual dessas ações demonstra o compromisso do Google com a LGPD, de acordo com o texto?",
            answer: "Oferecer ferramentas para que os usuários possam acessar, corrigir ou excluir seus dados.",
            options: ["Armazenar todos os dados dos usuários para uso interno.", "Oferecer ferramentas para que os usuários possam acessar, corrigir ou excluir seus dados.", "Coletar apenas dados anônimos.", "Limitar o acesso a informações sensíveis a um grupo restrito."],
            dica: "A LGPD se concentra em dar poder e controle sobre os dados aos próprios usuários."
        },
        {
            text: "De acordo com o compromisso de sustentabilidade, qual é uma das principais metas de do Google?",
            answer: "Alcançar 100% de energia renovável para suas operações globais.",
            options: ["Apenas financiar projetos de energia solar.", "Alcançar 100% de energia renovável para suas operações globais.", "Incentivar seus funcionários a usar transporte público.", "Ser uma das empresas mais lucrativas em energia limpa."],
            dica: "Atingiram essa meta em 2017, segundo o texto."
        },
        {
            text: "No que se refere à Responsabilidade Social (ESG), qual é uma iniciativa do pilar 'S' (Social) do Google?",
            answer: "Programas de diversidade e inclusão.",
            options: ["Metas de emissões de carbono zero.", "Reciclagem de servidores.", "Programas de diversidade e inclusão.", "Apenas financiar projetos em países de baixa renda."],
            dica: "O pilar 'S' foca na relação da empresa com as pessoas e a sociedade."
        },
        {
            text: "Qual é a relação entre as políticas de privacidade do Google e a LGPD, segundo o texto?",
            answer: "As leis como a LGPD motivaram o Google a aumentar a transparência e dar mais controle aos usuários.",
            options: ["As políticas de privacidade do Google já eram totalmente compatíveis.", "As leis como a LGPD motivaram o Google a aumentar a transparência e dar mais controle aos usuários.", "As leis exigem que o Google pare de coletar dados.", "As políticas de privacidade do Google se tornaram secretas após a LGPD."],
            dica: "A LGPD não proíbe a coleta de dados, mas muda a forma de usá-los."
        },
        {
            text: "Como a governança (pilar 'G' do ESG) do Google garante transparência e responsabilidade?",
            answer: "A posse de um conselho de administração e comitês que supervisionam as operações.",
            options: ["A exigência de que todos os funcionários trabalhem presencialmente.", "A posse de um conselho de administração e comitês que supervisionam as operações.", "A criação de jogos internos para testar a ética dos funcionários.", "O uso de IA para fiscalizar o comportamento dos funcionários."],
            dica: "Pense nos órgãos formais de supervisão."
        },
        {
            text: "Qual das seguintes ações do Google se alinha com o conceito de 'Economia Circular'?",
            answer: "Reciclar servidores e outros equipamentos de seus data centers.",
            options: ["Investir em energia solar.", "Diminuir o consumo de água.", "Reciclar servidores e outros equipamentos de seus data centers.", "Desenvolver produtos de software que não geram lixo."],
            dica: "A economia circular envolve o reaproveitamento de materiais e a minimização do lixo."
        },
        {
            text: "O texto afirma que o Google é neutro em carbono desde 2007. O que isso significa?",
            answer: "A empresa compensa a quantidade de carbono que emite na atmosfera.",
            options: ["A empresa nunca emitiu carbono.", "A empresa parou de operar para evitar emissões.", "A empresa compensa a quantidade de carbono que emite na atmosfera.", "A empresa usa apenas painéis solares para alimentar suas operações."],
            dica: "Ser 'neutro' é equilibrar as emissões com ações positivas."
        },
        {
            text: "Qual das seguintes ações está diretamente relacionada à 'democratização do acesso ao conhecimento' no pilar social do Google?",
            answer: "O Google oferece produtos gratuitos como o Google para Escolas e o Google Acadêmico.",
            options: ["O Google cobra uma taxa menor para estudantes.", "A empresa mantém todos os seus códigos como 'código aberto'.", "O Google oferece produtos gratuitos como o Google para Escolas e o Google Acadêmico.", "A empresa apenas financia projetos de educação em países de baixa renda."],
            dica: "A democratização do conhecimento se dá por produtos que ajudem a aprender e pesquisar."
        },
        {
            text: "A Qualidade de Governança (pilar 'G' do ESG) no Google é importante para:",
            answer: "Garantir a transparência e a responsabilidade de suas operações.",
            options: ["Garantir que a empresa consiga evitar o pagamento de impostos.", "Assegurar que os fundadores continuem com o controle total.", "Garantir a transparência e a responsabilidade de suas operações.", "Aumentar a receita da empresa a curto prazo."],
            dica: "O pilar 'G' está relacionado à estrutura de gestão e fiscalização da empresa."
        }
    ];

    let currentQuestion = 0;
    let score = 0;

    function showQuestion() {
        if (currentQuestion >= questions.length) {
            showChart();
            return;
        }

        const q = questions[currentQuestion];
        let html = `<div class="question-box"><h3>${q.text}</h3>`;
        q.options.forEach(opt => {
            html += `<button onclick="checkAnswer('${opt}')">${opt}</button>`;
        });
        
        html += `<button id="dica-btn">Ver Dica</button>`;
        html += `<p class="dica-texto">${q.dica}</p>`;
        
        html += `</div>`;
        document.getElementById("game").innerHTML = html;
        document.getElementById("feedback").innerHTML = "";

        document.getElementById("dica-btn").addEventListener('click', () => {
            document.querySelector('.dica-texto').classList.toggle('visivel');
        });
    }

    function checkAnswer(selected) {
        const q = questions[currentQuestion];
        const isCorrect = selected === q.answer;
        if (isCorrect) score++;
        const feedback = isCorrect
          ? `✅ Você acertou!`
          : `❌ Você errou! Resposta correta: ${q.answer}`;
        document.getElementById("feedback").innerHTML = `<div>${feedback}</div>`;
        currentQuestion++;
        setTimeout(showQuestion, 1500);
    }

    function showChart() {
        document.getElementById("game").innerHTML = "";
        document.getElementById("feedback").innerHTML = "<h2>🏆 Resultado Final</h2>";
        document.getElementById("chart-container").style.display = "block";

        const ctx = document.getElementById("scoreChart").getContext("2d");
        new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["Acertos", "Erros"],
                datasets: [{
                    label: "Desempenho",
                    data: [score, questions.length - score],
                    backgroundColor: ["#00c6ff", "#ff4d4d"]
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: questions.length,
                        ticks: {
                            font: {
                                size: 18
                            }
                        }
                    },
                    x: {
                        ticks: {
                            font: {
                                size: 18
                            }
                        }
                    }
                }
            }
        });
    }

    showQuestion();