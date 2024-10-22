
function DOMInteraction() {
    const recipe_cards = document.querySelectorAll('.Card')
    InteractRecipeCard(recipe_cards)
    slide()
}

function generateRecipe() {

    const removeAll = (section) => {
        while (section.hasChildNodes()) {
            section.removeChild(section.firstChild)
        }
    }

    const img = (link, image) => {
        removeAll(image)
        const img = document.createElement('img')
        img.setAttribute('src', link)
        image.append(img)
    }

    const recipe_name = (name, title) => {
        removeAll(title)
        const h1 = document.createElement('h1')
        h1.textContent = name
        title.append(h1)   
    }

    const description_name = (name, description) => {
        removeAll(description)
        const h4 = document.createElement('h4')
        h4.textContent = name
        description.append(h4)   
    }

    const ingredient_list = (ings, ingredients) => {
        removeAll(ingredients)
        const ul = document.createElement('ul')
        for (i=0; i < ings.length; i++) {
            const li = document.createElement('li')
            li.textContent = ings[i]
            ul.append(li)
        }

        ingredients.append(ul)
    }

    const step_list = (steps, howTo) => {
        removeAll(howTo)
        const ol = document.createElement('ol')
        for (i=0; i < steps.length; i++) {
            const li = document.createElement('li')
            li.textContent = steps[i]
            ol.append(li)
        }

        howTo.append(ol)

    }

    return { removeAll, img, recipe_name, description_name, ingredient_list, step_list}
    
}

function InteractRecipeCard(cards) {

    function addHover(card) {
        card.classList.add('Hover')
        card.style.cursor = 'pointer'
    }

    function removeHover(card) {
        card.classList.remove('Hover')
    }

    function openRecipe(card) {

        const section = document.querySelector('.Recipe-Section')

        const image = document.querySelector('.Image-Card')
        const title = document.querySelector('.Title-Card')
        const ingredients = document.querySelector('.Ingredients-Card')
        const description = document.querySelector('.Description-Card')
        const howTo = document.querySelector('.How-To-Card')

        const recipes = [
            { id: 'feijoada', img_link: './images/feijoada.jpg', title: 'Feijoada', description: 'A feijoada é um prato brasileiro de feijão preto com carne de porco, servido com arroz, couve e laranja. É rica em sabor e tradição.', ingredients: ["Feijão preto", "Carne de porco (como costela)", "Bacon", "Cebola", "Alho", "Sal", "Pimenta", "Óleo"], how_to: ["Lave o feijão preto e deixe de molho em água por algumas horas.", "Refogue a cebola e o alho no óleo.", "Adicione a carne de porco e o bacon e refogue até dourar.", "Acrescente água suficiente para cobrir os ingredientes na panela.", "Adicione o feijão preto escorrido, o sal e a pimenta.", "Cozinhe em fogo médio-baixo por cerca de 2 horas, mexendo ocasionalmente e adicionando água se necessário.", "Quando o feijão estiver macio e o caldo espesso, a feijoada estará pronta para servir."]},
            { id: 'pao-de-queijo', img_link: './images/pao-de-queijo.jpg', title: 'Pão de Queijo', description: 'O pão de queijo é uma iguaria brasileira feita com polvilho azedo e queijo, tradicionalmente servido como lanche.', ingredients: ["Polvilho azedo", "Queijo", "Leite", "Óleo", "Ovos", "Sal"], how_to: ["Ferva o leite com o óleo.", "Em uma tigela, misture o polvilho e o sal.", "Despeje a mistura de leite quente sobre o polvilho e mexa até formar uma massa.", "Adicione o queijo ralado e os ovos, misturando bem até obter uma massa homogênea.", "Modele pequenas bolas e coloque em uma assadeira.", "Asse em forno preaquecido a 180°C por aproximadamente 20 minutos ou até dourar."]},
            { id: 'tapioca', img_link: './images/tapioc.jpg', title: 'Tapioca', description: 'A tapioca é uma comida típica brasileira feita com a fécula extraída da mandioca, servida com diversos recheios.', ingredients: ["Goma de tapioca"], how_to: ["Aqueça uma frigideira antiaderente.", "Peneire a goma de tapioca sobre a frigideira quente, formando uma camada fina e uniforme.", "Espere até que a tapioca se una e vire para assar do outro lado por alguns segundos.", "Retire do fogo e recheie a tapioca conforme desejar."]},
            { id: 'brigadeiro', img_link: './images/brigadeiro.jpg', title: 'Brigadeiro', description: 'O brigadeiro é um doce brasileiro feito com leite condensado, chocolate em pó, manteiga e granulado.', ingredients: ["Leite condensado", "Chocolate em pó", "Manteiga", "Granulado (opcional)"], how_to: ["Em uma panela, misture o leite condensado, o chocolate em pó e a manteiga.", "Leve ao fogo médio e mexa sem parar até a mistura desgrudar do fundo da panela.", "Retire do fogo e deixe esfriar.", "Modele pequenas bolinhas com as mãos untadas com manteiga.", "Passe as bolinhas pelo granulado e coloque em forminhas de papel."]},
            { id: 'acaraje', img_link: './images/acaraje.jpg', title: 'Acarajé', description: 'O acarajé é um quitute típico da culinária baiana, feito com massa de feijão fradinho frita em azeite de dendê e recheada com vatapá, camarão seco e pimenta.', ingredients: ["Feijão fradinho", "Cebola", "Sal", "Pimenta", "Azeite de dendê", "Vatapá", "Camarão seco"], how_to: ["Deixe o feijão fradinho de molho em água por 4 horas.", "Escorra bem o feijão e bata no processador ou liquidificador até formar uma massa.", "Adicione a cebola picada, o sal e a pimenta à massa e bata novamente até ficar homogêneo.", "Aqueça o azeite de dendê em uma panela funda.", "Com uma colher, pegue porções da massa e frite no azeite quente até dourar.", "Escorra em papel absorvente.", "Corte os acarajés ao meio e recheie com vatapá e camarão seco."]}
        ]

        const generator = generateRecipe()
        
        recipes.forEach((recipe) => {
            if (recipe.id == card.id) {

                
                if (!(section.className.includes('Active'))) { section.classList.add('Active') }
                
                generator.img(recipe.img_link, image)
                generator.recipe_name(recipe.title, title)
                generator.description_name(recipe.description, description)
                generator.ingredient_list(recipe.ingredients, ingredients)
                generator.step_list(recipe.how_to, howTo)
                
                window.scrollTo(0, 10000)
            }
        })

    }

    cards.forEach((card) => {
        card.addEventListener('mouseenter', () => { addHover(card) })
        card.addEventListener('mouseleave', () => { removeHover(card) })
        card.addEventListener('click', () => { openRecipe(card) })
    })
}

function slide() {

    function lil_circle() {
        const section = document.querySelectorAll('section')
        section.forEach((sect) => {
            if (sect.className.includes('active')) {
                sect.classList.remove('active')
                return
            }
        })
        section[get_active_slide(wrappers)].classList.add('active')
    }
    function get_active_slide(wrappers) {
        for (let i = 0; i < wrappers.length; i++) {
            if (wrappers[i].className.includes('active')) {
                return parseInt(wrappers[i].id)
            }
        }
    }

    function previous_slide(active) {
        const next_slide = document.getElementById(active)
        const prev_slide = document.getElementById(active + 1)
        prev_slide.classList.remove('active')
        next_slide.classList.add('active')
    }

    function next_slide(active) {
        const next_slide = document.getElementById(active)
        const prev_slide = document.getElementById(active - 1)
        prev_slide.classList.remove('active')
        next_slide.classList.add('active')
    }
    const buttons = document.querySelectorAll('button')
    const wrappers = document.querySelectorAll('.wrapper')

    let active_slide = get_active_slide(wrappers)
    
    buttons.forEach((button) => {
        button.addEventListener('click', () => {

            if (button.id == 'prev') {
                if (active_slide > 0) {
                    active_slide -= 1
                }
                previous_slide(active_slide)
            }
            else if (button.id == 'next') {
                if (active_slide + 1 < wrappers.length) {
                    active_slide += 1
                }
                next_slide(active_slide)
                active_slide = get_active_slide(wrappers)
            } 
            lil_circle()
        })

    })
}

document.addEventListener('DOMContentLoaded', DOMInteraction)