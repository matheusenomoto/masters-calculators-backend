const dummyImgCard = 'https://masters-calculators-pub.s3.amazonaws.com/calculator.svg'
//cards
const cards = [
    {
        id: 1,
        projectStatus: 'deployed',
        title: 'FTTH',
        path: 'https://furukawa-roi-precon.web.app/',
        description: 'Calcula o CapEx e OpEx das soluções FTTx convencionais e pre-conectorizadas.',
        img:dummyImgCard,
        partner: 'Furukawa Electric',
        developer: 'Matheus Enomoto',
    },
    {
        id: 2,
        projectStatus: 'development',
        title: 'EyOn - FTTx',
        path: '/',
        description: 'Calcula a redução do OpEx em soluções FTTx utilizando da plataforma EyOn e seus sensores',
        img:dummyImgCard,
        partner: 'Furukawa Electric',
        developer: 'Matheus Enomoto',
    },
    {
        id: 3,
        projectStatus: 'development',
        title: 'Power Budget - FTTx',
        path: '/',
        description: 'Calcula a atenuação de redes FTTx com base na topologia e splitters',
        img:dummyImgCard,
        partner: 'Furukawa Electric',
        developer: 'Matheus Enomoto',
    },
    {
        id: 4,
        projectStatus: 'development',
        title: 'FTTA',
        path: '/',
        description: 'Ajuda no cálculo ou projeto de redes FTTA, MDU, Prediais',
        img:dummyImgCard,
        partner: 'Furukawa Electric',
        developer: 'Matheus Enomoto',
    },
    {
        id: 5,
        projectStatus: 'development',
        title: 'Multi Fibra',
        path: '/',
        description: 'Apresenta os cálculos de implantação de uma rede multi fibra',
        img:dummyImgCard,
        partner: 'Furukawa Electric',
        developer: 'Matheus Enomoto',
    },
]

module.exports = { cards }