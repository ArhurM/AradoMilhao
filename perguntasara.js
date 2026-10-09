// Banco de perguntas focado em Valores e Cultura Organizacional
const BANCO_PERGUNTAS = {
    geral: [
        // --- BLOCO 1: PERGUNTAS FÁCEIS (1 a 5) ---
        {
            nivel: 1,
            pergunta: "Qual valor diz respeito a ter atitude firme, não desistir diante dos obstáculos e manter a constância?",
            opcoes: ["Determinação e Persistência", "Fazer Bem Feito Sempre", "Confiança", "Humildade"],
            correta: 0
        },
        {
            nivel: 1,
            pergunta: "Acreditar na capacidade da equipe, demonstrar transparência e delegar com segurança reforça qual pilar?",
            opcoes: ["Foco no Básico", "Confiança", "Meritocracia", "Cumprir o Combinado"],
            correta: 1
        },
        {
            nivel: 1,
            pergunta: "A postura de reconhecer os próprios limites, aprender com os outros e estar aberto a feedbacks reflete qual princípio?",
            opcoes: ["Intolerância à Desperdício", "Responsabilidade Social", "Humildade", "Confiança"],
            correta: 2
        },
        {
            nivel: 2,
            pergunta: "Executar as tarefas do dia a dia com excelência, sem atalhos e com máxima atenção à qualidade demonstra:",
            opcoes: ["Cumprir o Combinado", "Fazer Bem Feito Sempre", "Humildade", "Prática do Elogio e da Crítica Construtiva"],
            correta: 1
        },
        {
            nivel: 2,
            pergunta: "Garantir a pontualidade nas entregas e honrar rigorosamente prazos e compromissos firmados é o exemplo claro de:",
            opcoes: ["Determinação e Persistência", "Responsabilidade Social", "Confiança", "Cumprir o Combinado"],
            correta: 3
        },

        // --- BLOCO 2: PERGUNTAS MÉDIAS (6 a 10) ---
        {
            nivel: 2,
            pergunta: "Promover ações sustentáveis, apoiar a comunidade local e impactar positivamente a sociedade é o foco da:",
            opcoes: ["Responsabilidade Social", "Foco no Básico", "Meritocracia", "Intolerância à Desperdício"],
            correta: 0
        },
        {
            nivel: 3,
            pergunta: "Evitar retrabalho, otimizar recursos financeiros e combater o uso ineficiente do tempo da equipe significa aplicar a:",
            opcoes: ["Intolerância à Desperdício", "Humildade", "Determinação e Persistência", "Confiança"],
            correta: 0
        },
        {
            nivel: 3,
            pergunta: "Garantir que a operação essencial funcione perfeitamente antes de tentar inovações complexas é o pilar de:",
            opcoes: ["Foco no Básico", "Fazer Bem Feito Sempre", "Meritocracia", "Cumprir o Combinado"],
            correta: 0
        },
        {
            nivel: 3,
            pergunta: "Qual prática visa reconhecer publicamente o bom desempenho e orientar em particular de forma respeitosa para o crescimento do colega?",
            opcoes: ["Prática do Elogio e da Crítica Construtiva", "Humildade", "Confiança", "Responsabilidade Social"],
            correta: 0
        },
        {
            nivel: 4,
            pergunta: "Repensar processos continuamente para eliminar custos desnecessários e insumos excedentes é uma forma de demonstrar:",
            opcoes: ["Foco no Básico", "Intolerância à Desperdício", "Humildade", "Fazer Bem Feito Sempre"],
            correta: 1
        },

        // --- BLOCO 3: PERGUNTAS DIFÍCEIS (11 a 15) ---
        {
            nivel: 4,
            pergunta: "Reconhecer, premiar e promover colaboradores com base estritamente em seus resultados e entregas mensuráveis reflete o pilar da:",
            opcoes: ["Confiança", "Responsabilidade Social", "Meritocracia", "Cumprir o Combinado"],
            correta: 2
        },
        {
            nivel: 4,
            pergunta: "Quando a equipe enfrenta um projeto longo com sucessivas falhas, mas continua ajustando a estratégia até atingir a meta, ela demonstra:",
            opcoes: ["Prática do Elogio e da Crítica Construtiva", "Determinação e Persistência", "Meritocracia", "Humildade"],
            correta: 1
        },
        {
            nivel: 5,
            pergunta: "Ao dar um feedback difícil sobre uma entrega incorreta, buscar o aperfeiçoamento da pessoa sem ataques pessoais é a aplicação direta da:",
            opcoes: ["Prática do Elogio e da Crítica Construtiva", "Humildade", "Confiança", "Responsabilidade Social"],
            correta: 0
        },
        {
            nivel: 5,
            pergunta: "Priorizar a consistência no atendimento ao cliente interno e externo, garantindo padrão elevado constante, alinha-se ao princípio de:",
            opcoes: ["Intolerância à Desperdício", "Fazer Bem Feito Sempre", "Meritocracia", "Foco no Básico"],
            correta: 1
        },
        {
            nivel: 5,
            pergunta: "Evitar a burocracia excessiva e concentrar os esforços no que traz valor direto e imediato para o cliente trata-se de manter o:",
            opcoes: ["Foco no Básico", "Cumprir o Combinado", "Confiança", "Responsabilidade Social"],
            correta: 0
        },

        // --- PERGUNTA DO MILHÃO (16) ---
        {
            nivel: 6,
            pergunta: "VALENDO 1 MILHÃO DE REAIS: O pilar onde o desempenho individual e o alinhamento cultural são os únicos critérios para evolução profissional é denominado:",
            opcoes: ["Humildade", "Meritocracia", "Responsabilidade Social", "Determinação e Persistência"],
            correta: 1
        }
    ]
};
