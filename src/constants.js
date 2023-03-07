//cards
const cards = [
    {
        id: 1,
        projectStatus: 'deployed',
        title: 'FTTH',
        description: 'Calcula o CapEx e OpEx das soluções FTTx convencionais e pre-conectorizadas.',
        partner: 'Furukawa Electric',
        developer: 'Matheus Enomoto',
        charts: true,
        roi: true,
    },
    {
        id: 2,
        projectStatus: 'development',
        title: 'EyOn - FTTx',
        description: 'Calcula a redução do OpEx em soluções FTTx utilizando da plataforma EyOn e seus sensores',
        partner: 'Furukawa Electric',
        developer: 'Matheus Enomoto',
        charts: true,
        roi: true,
    },
    {
        id: 3,
        projectStatus: 'development',
        title: 'Power Budget - FTTx',
        description: 'Calcula a atenuação de redes FTTx com base na topologia e splitters',
        partner: 'Furukawa Electric',
        developer: 'Matheus Enomoto',
        charts: false,
        roi: false,
    },
    {
        id: 4,
        projectStatus: 'development',
        title: 'FTTA',
        description: 'Ajuda no cálculo ou projeto de redes FTTA, MDU, Prediais',
        partner: 'Furukawa Electric',
        developer: 'Matheus Enomoto',
        charts: false,
        roi: false,
    },
    {
        id: 5,
        projectStatus: 'development',
        title: 'Multi Fibra',
        description: 'Apresenta os cálculos de implantação de uma rede multi fibra',
        partner: 'Furukawa Electric',
        developer: 'Matheus Enomoto',
    },
]

module.exports = { cards }