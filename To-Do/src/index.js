import { render } from './modules/render'

const projects_DOM = ['li', 'button']

function renderProject() {

    const ul = document.querySelector('ul')

    function deleteAll(DIV) {
        while (DIV.hasChildNodes()) {
            DIV.removeChild(DIV.firstChild)
        }
    }

    function addNewProject(add) {

        function swapIndex() {
            const last_li = projects_DOM[projects_DOM.length - 1]
            const btn = projects_DOM[projects_DOM.length - 2]
            projects_DOM[projects_DOM.length - 1] = btn
            projects_DOM[projects_DOM.length - 2] = last_li
        }
    
        add.addEventListener('click', () => {
            projects_DOM.push('li')
            swapIndex()
            renderProject()
        })
    }
    
    function AppendInto() {
        const title = (li) => {

            const div = document.createElement('div')
            div.className = 'Project-Title'

            const form = document.createElement('form')
            const input = document.createElement('input')
            input.setAttribute('placeholder', 'Adicione o título!')
            
            form.append(input)
            div.append(form)
            li.append(div)
        }

        const task = (li) => {

            const div = document.createElement('div')
            div.className = 'Tasks'

            const ul = document.createElement('ul')
            const list = document.createElement('li')
            
        }
        return { title }
    }

    

    deleteAll(ul)

    const append = AppendInto()
    const forms = document.querySelectorAll('form')
    projects_DOM.forEach((project) => {
        const li = document.createElement('li')
        li.className = 'Project'
        if (project == 'button') {
            const button = document.createElement('button')
            button.innerText = '+'
            button.id = 'ADD'
            addNewProject(button)
            li.append(button)
        }
        else {
            append.title(li)

        }
        ul.append(li)
    })

    forms.forEach((form) => {
        console.log(form)
    })
}



document.addEventListener('DOMContentLoaded', renderProject)


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