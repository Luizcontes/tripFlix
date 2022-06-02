var carrosel = document.getElementById('lista');
var cover = document.getElementById('principal');
var titulo = document.getElementById('titulo');
var descricao = document.getElementById('descricao');
var button = document.getElementById('button');

const info = [
    {
        'country': 'Argentina',
        'descricao': 'Officially the Argentine Republic, is a country in the southern half of South America. Argentina covers an area of 2,780,400 km², making it the largest Spanish-speaking nation in the world by area.'
    },
    {
        'country': 'Chile',
        'descricao': 'Chile is a long, narrow country stretching along South Americas western edge, with more than 6, 000km of Pacific Ocean coastline.Santiago, its capital, sits in a valley surrounded by the Andes and Chilean Coast Range mountains.The citys palm-lined Plaza de Armas contains the neoclassical cathedral and the National History Museum. The massive Parque Metropolitano offers swimming pools, a botanical garden and zoo. '
    },
    {
        'country': 'Espanha',
        'descricao': 'Spain, a country on Europe’s Iberian Peninsula, includes 17 autonomous regions with diverse geography and cultures. Capital city Madrid is home to the Royal Palace and Prado museum, housing works by European masters. Segovia has a medieval castle (the Alcázar) and an intact Roman aqueduct. Catalonia’s capital, Barcelona, is defined by Antoni Gaudí’s whimsical modernist landmarks like the Sagrada Família church.'
    },
    {
        'country': 'Mexico',
        'descricao': 'Mexico, officially the United Mexican States, is a country in the southern portion of North America. It is bordered to the north by the United States; to the south and west by the Pacific Ocean; to the southeast by Guatemala, Belize, and the Caribbean Sea; and to the east by the Gulf of Mexico.'
    },
    {
        'country': 'Suecia',
        'descricao': 'Sweden is a Scandinavian nation with thousands of coastal islands and inland lakes, along with vast boreal forests and glaciated mountains. Its principal cities, eastern capital Stockholm and southwestern Gothenburg and Malmö, are all coastal. Stockholm is built on 14 islands. It has more than 50 bridges, as well as the medieval old town, Gamla Stan, royal palaces and museums such as open-air Skansen. '
    },
    {
        'country': 'Emirados Arabes Unidos',
        'descricao': 'The United Arab Emirates, or simply the Emirates, is a country in Western Asia. It is located at the eastern end of the Arabian Peninsula and shares borders with Oman and Saudi Arabia, while having maritime borders in the Persian Gulf with Qatar and Iran.'
    },
    {
        'country': 'China',
        'descricao': 'China, officially the Peoples Republic of China, is a country in East Asia. It is the worlds most populous country, with a population of more than 1.4 billion. China spans five geographical time zones and borders 14 countries, the second most of any country in the world after Russia.'
    },
    {
        'country': 'Polinesia Francesa',
        'descricao': 'French Polynesia, an overseas collectivity of France, comprises more than 100 islands in the South Pacific, stretching for more than 2,000km. Divided into the Austral, Gambier, Marquesas, Society and Tuamotu archipelagos, they re known for their coral-fringed lagoons and over-the-water bungalow hotels. Island features include white- and black-sand beaches, mountains, rugged backcountry and towering waterfalls.'
    },
    {
        'country': 'Africa do Sul',
        'descricao': 'South Africa is a country on the southernmost tip of the African continent, marked by several distinct ecosystems. Inland safari destination Kruger National Park is populated by big game. The Western Cape offers beaches, lush winelands around Stellenbosch and Paarl, craggy cliffs at the Cape of Good Hope, forest and lagoons along the Garden Route, and the city of Cape Town, beneath flat-topped Table Mountain.'
    },
    {
        'country': 'Australia',
        'descricao': 'Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands. With an area of 7,617,930 square kilometres, Australia is the largest country by area in Oceania and the worlds sixth-largest country.'
    },
]

carrosel.addEventListener('click', event => {
    filme = event.srcElement.id;
    if (Number.isInteger(parseInt(filme))) {
        let capa = 'bg' + filme;
        cover.className = capa;
        titulo.innerHTML = info[filme].country;
        descricao.innerHTML = info[filme].descricao;
    }
});

button.addEventListener('click', () => {
    let ligacao = cover.className;
    ligacao = 'movie' + ligacao[2] + '.html';
    console.log(ligacao);
    window.open(ligacao,'_self');
});