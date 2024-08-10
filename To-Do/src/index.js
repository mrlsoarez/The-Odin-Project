import { render } from './modules/render'

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