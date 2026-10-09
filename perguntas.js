// Banco de perguntas modular por temas e níveis de dificuldade
const BANCO_PERGUNTAS = {
    geral: [
        {
            nivel: 1,
            pergunta: "QUEM É O PROFISSIONAL QUE APAGA INCÊNDIOS?",
            opcoes: ["POLICEMAN", "COP", "FIREMAN", "SWIMMER"],
            correta: 2 // Índice base 0 (0: POLICEMAN, 1: COP, 2: FIREMAN, 3: SWIMMER)
        },
        {
            nivel: 1,
            pergunta: "QUAL O FILME DE ESTREIA DE ALFRED HITCHCOCK EM HOLLYWOOD?",
            opcoes: ["A SOMBRA DE UMA DÚVIDA", "FESTIM DIABÓLICO", "REBECCA, A MULHER INESQUECÍVEL", "O TERCEIRO TIRO"],
            correta: 2
        },
        {
            nivel: 1,
            pergunta: "QUAL É O NÚMERO PRIMO LOGO APÓS O 7?",
            opcoes: ["8", "9", "11", "13"],
            correta: 2
        },
        {
            nivel: 1,
            pergunta: "DE QUAL PAÍS É A BANDEIRA VERDE E AMARELA COM UM CÍRCULO AZUL?",
            opcoes: ["ARGENTINA", "BRASIL", "MÉXICO", "PORTUGAL"],
            correta: 1
        },
        {
            nivel: 2,
            pergunta: "QUAL PLANETA É CONHECIDO COMO O PLANETA VERMELHO?",
            opcoes: ["VÊNUS", "MARTE", "JÚPITER", "SATURNO"],
            correta: 1
        },
        {
            nivel: 2,
            pergunta: "QUAL É A CAPITAL DA FRANÇA?",
            opcoes: ["LONDRES", "MISTÉRIO", "PARIS", "LISBOA"],
            correta: 2
        },
        {
            nivel: 3,
            pergunta: "QUAL ELEMENTO QUÍMICO POSSUI O SÍMBOLO 'Au'?",
            opcoes: ["PRATA", "OURO", "ALUMÍNIO", "COBRE"],
            correta: 1
        }
    ]
};
