collection = [
    {
        'Film': 'Lola',
        'Image_URL': 'images/lola.jpg',
        'Status': 'Inactive',
        'SYNOPSIS': 'Lola é um filme francês de 1964 dirigido por Jacques Demy. A história gira em torno de uma jovem dançarina de cabaré, Lola, que vive em Nantes e sonha com uma vida melhor. Ela enfrenta desafios e decisões sobre amor e destino enquanto espera pelo retorno do homem que ela ama.',
        'DESCRIPTION': 'O filme "Lola" é um dos primeiros trabalhos de Jacques Demy e é conhecido por seu estilo visual e sua narrativa que mistura o realismo com elementos de conto de fadas. A obra destaca-se pela trilha sonora encantadora e pelo retrato sensível dos sonhos e desilusões da protagonista. A história é marcada por uma atmosfera melancólica e uma abordagem poética da vida e do amor.',
        'GIF_URL': 'images/lola_gif.gif',
        'ROTTEN_URL': 'images/lola_rotten.png'
    },
    {
        'Film': 'Umbrellas of Cherbourg',
        'Image_URL': 'images/umbrellas of cherbourg.jpeg',
        'Status': 'Inactive',
        'SYNOPSIS': '"Umbrellas of Cherbourg" é um musical francês de 1964 dirigido por Jacques Demy. O filme conta a história de Geneviève, uma jovem que se apaixona por um mecânico, Guy, em Cherbourg, França. Quando Guy é chamado para lutar na Argélia, o romance deles enfrenta grandes desafios.',
        'DESCRIPTION': 'O filme é famoso por sua trilha sonora completamente cantada e seu estilo visual vibrante. "Umbrellas of Cherbourg" explora temas de amor, perda e a realidade das separações forçadas. A obra é notável por seu design de produção único e sua abordagem inovadora ao gênero musical, tornando-se um clássico do cinema francês.',
        'GIF_URL': 'images/umbrellas_gif.gif',
        'ROTTEN_URL': 'images/umbrella_rotten.png'
    },

    {
        'Film': 'Peau d\'Âne',
        'Image_URL': 'images/peau.png',
        'Status': 'Inactive',
        'SYNOPSIS': '"Peau d\'Âne" (A Donkey Skin) é um filme francês de 1970 dirigido por Jacques Demy. Baseado em um conto de fadas de Charles Perrault, a história segue uma princesa que, para escapar de um casamento forçado com seu pai, foge e se disfarça com a pele de um burro mágico.',
        'DESCRIPTION': 'O filme é conhecido por sua estética encantadora e sua abordagem mágica do conto de fadas clássico. Com uma trilha sonora composta por Michel Legrand e um visual colorido e exuberante, "Peau d\'Âne" combina elementos de fantasia com uma narrativa sensível, explorando temas de identidade e autoafirmação.',
        'GIF_URL': 'images/peau_gif.gif',
        'ROTTEN_URL': 'images/peau_rotten.png'
    },
    {
        'Film': 'Girls of Rochefort',
        'Image_URL': 'images/rochefort.jpg',
        'Status': 'Active',
        'SYNOPSIS': '"The Young Girls of Rochefort" (Les Demoiselles de Rochefort) é um musical francês de 1967 dirigido por Jacques Demy. O filme segue as gêmeas Delphine e Solange, que trabalham como instrutoras de dança em Rochefort e sonham com uma vida mais emocionante, enquanto seus caminhos cruzam com diversos personagens em busca de amor e sucesso.',
        'DESCRIPTION': 'Com uma trilha sonora cativante composta por Michel Legrand e uma paleta de cores vibrantes, o filme é um tributo ao estilo musical de Hollywood dos anos 1950. "Girls of Rochefort" é notável por seu ritmo alegre, coreografias envolventes e seu charme visual, celebrando a vida e o amor através de uma narrativa otimista e cheia de energia.'
        , 'GIF_URL': 'images/rochefort_gif.gif',
        'ROTTEN_URL': 'images/rochefort_rotten.png'
    }
]

let OG_IMAGE = true 

function renderActive() {

    function deleteAll(Container) {
        while (Container.hasChildNodes()) {
            Container.removeChild(Container.firstChild)
        }
    }
    
    
    for (i = 0; i < collection.length; i++) {
        if (collection[i].Status == 'Active') {
            
            const ImageContainer = document.querySelector('.Image-Container')
            const Title = document.querySelector('.Title')
            const Description = document.querySelector('.Description')
            const Synopsis = document.querySelector('.Synopsis')
            const gif = document.querySelector('#gif')
            const rotten = document.querySelector('#rotten')
            
            function renderImage() {
                deleteAll(ImageContainer)
                const img = document.createElement('img')
                img.setAttribute('src', collection[i].Image_URL)
                ImageContainer.append(img)
            }

            function renderTitle() {
                deleteAll(Title)
                const h1 = document.createElement('h1')
                h1.innerText = collection[i].Film
                Title.append(h1)
            }

            function renderDescription() {
                deleteAll(Description)
                const span_description = document.createElement('span')
                span_description.innerText = collection[i].DESCRIPTION
                Description.append(span_description)
            }

            function renderSynopsis() {
                deleteAll(Synopsis)
                const span_synopsis = document.createElement('h1')
                span_synopsis.innerText = collection[i].SYNOPSIS
                Synopsis.append(span_synopsis)
    
            }

            function renderImages() {
                gif.setAttribute('src', collection[i].GIF_URL)
                rotten.setAttribute('src', collection[i].ROTTEN_URL)
            }


            renderImage()
            renderTitle()
            renderDescription()
            renderSynopsis()
            renderImages()
          

        }
    }
}

function buttonInteraction() {
    const buttons = document.querySelectorAll('button')
    buttons.forEach((button) => {button.addEventListener('click', () => {
        const active = getActive()
        let new_index
        if (button.id == 'prev') {
            new_index = active['index'] - 1
            if (new_index >= 0) {
                collection[active['index']].Status = 'Inactive'
                collection[new_index].Status = 'Active'
                renderActive()
                }
            }
        else {
            new_index = active['index'] + 1
            if (new_index < collection.length) {
                collection[active['index']].Status = 'Inactive'
                collection[new_index].Status = 'Active'
                renderActive()
            }
            }
        })
    })
}

function getActive() {
    let active = { 'struct': '', 'index': '' }
    for (i = 0; i < collection.length; i++) {
        if (collection[i].Status == 'Active') {
            active['struct'] = collection[i]
            active['index'] = i
            return active
        }
    }
}

function hoverImage() {
    const hover = document.querySelector('#Image-Hover')

    const img1 = document.querySelector('#hover1')

    function getOriginal() {
        if (OG_IMAGE) {
            img1.classList.remove('Hover')
        }
        else {
            img1.classList.add('Hover')
        }
    }

    function getHover() {
        hover.addEventListener('mouseenter', () => {
            OG_IMAGE = false
            getOriginal()
        })
        hover.addEventListener('mouseleave', () => {
            OG_IMAGE = true
            getOriginal()
        })

    }

    getOriginal()
    getHover()

}




document.addEventListener('DOMContentLoaded', renderActive())
document.addEventListener('DOMContentLoaded', buttonInteraction())
document.addEventListener('DOMContentLoaded', hoverImage())

