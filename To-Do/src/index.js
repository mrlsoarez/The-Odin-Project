import { DOMCreator } from './modules/DOMCreator'

const projects_DOM = ['li', 'button']

function DOMInteraction() {
    const ul = document.querySelector('ul')
    generateNewProjects(projects_DOM, ul)
}

// Função para trocar os dois index do array e jogar o botão p/ final
function swapIndex(array) {

    const last_index = array.length - 1
    const button_index = array.length - 2

    const li = array[last_index]
    const button_li = array[button_index]

    array[last_index] = button_li
    array[button_index] = li

}

// Evento de clique para adicionar novo projeto
function addEvent(btn) {

    const ul = document.querySelector('ul')

    btn.addEventListener('click', () => {
        projects_DOM.push('li')
        swapIndex(projects_DOM)
        generateNewProjects(projects_DOM, ul)
    })

}

//Geração de novo projeto com base no array
function generateNewProjects(array, ul) {

    const render = renderProject()
    let container 

    clearAllSpace(ul)

    array.forEach((index) => {

        if (index == 'li') {
            container = render.container()
            render.title(container)
            render.tasks(container)
        }
        if (index == 'button') {
            container = render.button()
            addEvent(container)
        }

        ul.append(container)

    })

}


// Geração do projeto e interno do projeto com função auxiliar
function renderProject() {
    const builderDOM = DOMCreator()

    const container = () => {
        const list = builderDOM.generateList('Project')
        return list
    }

    const button = () => {
        const button = builderDOM.generateList('Project')
        button.innerHTML = '<button>+</button>'
        return button
    }

    const title = (container) => {

        const title = builderDOM.generateDIV('Project-Title')
        const input = document.createElement('input')
        input.setAttribute('placeholder', 'Insira o título!')
        title.append(input)

        container.append(title)
    }

    const tasks = (container) => {
        const tasks = builderDOM.generateWrapper('Tasks')

        const default_task = builderDOM.generateWrapper('Task')
        const checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        const input = document.createElement('input')
        default_task.append(checkbox, input)

        tasks.append(default_task)
        container.append(tasks)
    }

    return { container, button, title, tasks }
}

// Remove todos os elementos das DIVS
function clearAllSpace(DIV) {
    while (DIV.hasChildNodes()) {
        DIV.removeChild(DIV.firstChild)
    }
}





document.addEventListener('DOMContentLoaded', DOMInteraction)


/*
var projects = []

async function DOMInteraction() {
    activateDialogue()
    openProject()
    openCalendar()
}



function activateDialogue() {

    const toggle = document.querySelector('.Toggle-Dialogue')
    const close = document.querySelector('#close')
    const dialog = document.querySelector('.Add')
    const main = document.querySelector('main')
    
    toggle.addEventListener('click', () => {
        if (!(dialog.className.includes('Open'))) {
            dialog.classList.add('Open')
        }
        main.style.filter = 'blur(5px)'
    })
    
    close.addEventListener('click', () => {
        if (dialog.className.includes('Open')) {
            dialog.classList.remove('Open')
            main.style.filter = 'blur(0px)'
        }
    })

}


function closeDialogue() {
    const dialog = document.querySelector('.Add')
    const main = document.querySelector('main')
    dialog.classList.remove('Open')
    main.style.filter = 'blur(0px)'
}

function openProject() {

    class Project {
        constructor(name, icon, tasks = []) {
            this.name = name
            this.icon = icon
            this.tasks = tasks
        }
    }

    const form = document.querySelector('form')

    function getProjectForm() {

        function addNewProject() {

            const title = document.querySelector('#project').value
            const icon = document.querySelector('select').value

            const li = document.createElement('li')

            const button = document.createElement('button')
            button.className = 'Project-Page'
            button.id = title
            button.innerHTML = icon

            li.append(button)

            document.querySelector('ul').append(li)
            projects.push(new Project(title, icon))
            form.reset()
            
        }
        
        addNewProject()
        openNewProject(projects)

    }

    const submit = document.querySelector('#submit')
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        closeDialogue()
        getProjectForm()
    })

}

function openNewProject(projects) {

    const pages = document.querySelectorAll('.Project-Page')
    const content = document.querySelector('main')
    const rendering = render()

    for (let i = 0; i < pages.length; i++) {
        pages[i].addEventListener('click', () => {
            deleteContent(content)
            // content.classList.remove('Calendar')
            rendering.project(projects[i].name, projects[i].icon, projects[i].tasks)
        })

    }

}

function openCalendar() {

    const calendar = document.querySelector('.Calendar-Button')
    const content = document.querySelector('main')
    const rendering = render()
    
    calendar.addEventListener('click', () => {
        deleteContent(content)
        const tasks = []
        for (let i = 0; i < projects.length; i++) {
            tasks.push(projects[i].tasks)
        }
        content.classList.add('Calendar')
        rendering.calendar(tasks)
    })
}

function deleteContent(content) {
    while (content.hasChildNodes()) {
        content.removeChild(content.firstChild)
    }
}

document.addEventListener('DOMContentLoaded', DOMInteraction)
*/