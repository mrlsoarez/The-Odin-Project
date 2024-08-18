import { NavLink } from 'react-router-dom'
import { DOMCreator } from './modules/DOMCreator'

class ToDo {
    constructor (title, date, description, icon, isDone) {
        this.title = title 
        this.date = date
        this.description = description
        this.icon = icon
        this.isDone = isDone
    }
    
    checkIFDone() {
        if (this.isDone == false) {
            return 'red'
        }
        else {
            return 'green'
        }
    }
}

let PROJECTS_OVERVIEW = [{'Project': 0, 'Tasks': []}]
let PROJECTS_DOM = ['li', 'button']
let PROJECTS_TOTAL = 0

function DOMInteraction() {

    const Panel_Button = document.querySelectorAll('.Panel-Button')
    const PAGE_GENERATE = PageGenerate()
    Panel_Button.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.id == 'home') {
                PAGE_GENERATE.home()
            }
            else if (button.id == 'calendar') {
                PAGE_GENERATE.calendar() 
            }
        })
    })
    
    const Add_New_Projects_Button = document.querySelector('.Button')
    const container = document.querySelector('ul')

    Add_New_Projects_Button.addEventListener('click', () => {
        addNewProject(container)
    })
    
    

    const Open_Task_Form_Buttons = document.querySelectorAll('.Toggle-Dialogue')
    Open_Task_Form_Buttons.forEach((button) => {
        button.addEventListener('click', () => {
            TaskForm_Dealer(button.id)
        })
        button.addEventListener('mouseenter', () => {
            button.style.cursor = 'pointer'
            button.classList.add('Hover')
        })
    })

    
   
    
}

function PageGenerate() {

    const main = document.querySelector('.Content')
    const render = DOMCreator() 
    
    const home = () => {
        render.emptyness(main)

        const container = render.element('section', '', 'Projects')
        const h1 = render.element('h1', 'TO-DO', 'Title')
        const ul = render.element('ul', '', '')

        container.append(h1, ul)
        main.append(container)

        renderProjects(ul)
    }

    const calendar = () => {
        render.emptyness(main)

        const container = render.element('section', '', 'Calendar')
        const h1 = render.element('h1', 'Calendar', 'Title')
        const ul = render.element('ul', '', '')

        container.append(h1, ul)
        main.append(container)
    }
    return {home, calendar}
}

function renderProjects(container) {

    const render = DOMCreator()

    function renderTasks(container, index) {
        PROJECTS_OVERVIEW[index].Tasks.forEach((task) => {
            const li = render.element('li', '', 'Task')
            const input = render.element('input', '', 'Task-Doner')
            render.setAttribute(input, 'type', 'checkbox')
            const span = render.element('span', task.title, '')
            span.style.color = task.checkIFDone()
            li.append(input, span)
            container.append(li)
        })
    }

    render.emptyness(container)

    for (let i = 0; i < PROJECTS_DOM.length; i++) {   
        const li = render.element('li', '', 'Project')
        if (PROJECTS_DOM[i] == 'button') {
            const button = render.element('button', '', 'Button')
            li.append(button)
            container.append(li)
            break    
        }

        const title = render.element('h2', 'Title', 'Title')
        const btn = render.element('button', "<i class='bx bx-message-square-add'></i>", 'Toggle-Dialogue')
        btn.id = i
        const ul = render.element('ul', '', 'Task-Wrapper')

        renderTasks(ul, i)
        li.append(title, btn, ul)
        container.append(li)
    }
    DOMInteraction()

}

function addNewProject(container) {
    
    function swapIndex(array) {

    const last_index = array.length - 1
    const button_index = array.length - 2

    const li = array[last_index]
    const button_li = array[button_index]

    array[last_index] = button_li
    array[button_index] = li

    }  


    PROJECTS_DOM.push('li')
    PROJECTS_OVERVIEW.push({'Project': PROJECTS_TOTAL += 1, 'Tasks': []})

    swapIndex(PROJECTS_DOM)   
    renderProjects(container)

}

function TaskForm_Dealer(index) {
    
    function openForm() {
        dialog.classList.add('Open')
        main.style.filter = 'blur(5px)'
    }

    function closeForm() {
        dialog.classList.remove('Open')
        main.style.filter = 'blur(0px)'
        submit.removeEventListener('click', submitHandler)
    }

    function submitHandler(e) {
        e.preventDefault()
        const form = document.querySelector('form')
        const formData = new FormData(form)

        PROJECTS_OVERVIEW[index].Tasks.push(
            new ToDo(
                formData.get('task'),
                formData.get('date'),
                formData.get('description'),
                formData.get('icon'),
                false
            )
        )

        renderProjects()
        closeForm()
    }
    
    const close = document.querySelector('#close')
    const dialog = document.querySelector('.Add')
    const main = document.querySelector('main')
    const submit = document.querySelector('#submit')

    if (!(dialog.className.includes('Open'))) {
        openForm()
        submit.addEventListener('click', submitHandler)
    }

    close.addEventListener('click', () => {
        if (dialog.className.includes('Open')) {
            closeForm()
        }
    })
}


//renderProjects()
document.addEventListener('DOMContentLoaded', () => { PageGenerate().home()})
/*
function DOMInteraction() {
    const ul = document.querySelector('ul')
    generateNewProjects(PROJECTS_DOM, ul)
    const task_form = document.querySelectorAll('.Task-Form')
    TaskForm_Dealer(task_form)
    renderTasks()
}
  
function renderTasks() {
    const project = document.querySelectorAll('.Project')
    const wrapper = document.querySelector('.Task-Wrapper')
    for (let i = 0; i < project.length; i++) {
        for (let q=0; q < PROJECTS_OVERVIEWW.length; q++) {
            if (i == PROJECTS_OVERVIEWW[q].Project) {
                if (PROJECTS_OVERVIEWW[q].Tasks == 'button') {
                    const il = document.createElement('il')
                    const button = document.createElement('button')
                    button.innerHTML = 'Create'
                    openForm(button)
                    il.append(button)
                    wrapper.append(il)
                }
            }
        }
    }
}

function openForm(button) {
    button.addEventListener('click', () => {
        console.log(button)
    })
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
        PROJECTS_DOM.push('li')
        container.push({'Project': project_total += 1, 'Tasks': ['button']})
        swapIndex(PROJECTS_DOM)
        generateNewProjects(PROJECTS_DOM, ul)
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
            render.tasks_form(container)
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

    const tasks_form = (container) => {
        const ul = document.createElement('ul')
        ul.className = 'Task-Wrapper'
        container.append(ul) 
        return container
        /*
        const tasks_form = builderDOM.generateWrapper('tasks_form')

        const default_task = builderDOM.generateWrapper('Task')
        const checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        const input = document.createElement('input')
        default_task.append(checkbox, input)

        tasks_form.append(default_task)
        container.append(tasks_form)
    }
    
    return { container, button, title, tasks_form }
}

// Remove todos os elementos das DIVS
function clearAllSpace(DIV) {
    while (DIV.hasChildNodes()) {
        DIV.removeChild(DIV.firstChild)
    }
}

function TaskForm_Dealer(task_form) {
    console.log(task_form, 'a')    
    for (let i=0; i < task_form.length; i++) {
        task_form[i].addEventListener('click', (e) => {
            const form = document.createElement('form')
            const input1 = document.createElement
            e.preventDefault()
        })
    } 
}





document.addEventListener('DOMContentLoaded', DOMInteraction)


*/
/*
let projects = []

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
        constructor(name, icon, tasks_form = []) {
            this.name = name
            this.icon = icon
            this.tasks_form = tasks_form
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
            rendering.project(projects[i].name, projects[i].icon, projects[i].tasks_form)
        })

    }

}

function openCalendar() {

    const calendar = document.querySelector('.Calendar-Button')
    const content = document.querySelector('main')
    const rendering = render()
    
    calendar.addEventListener('click', () => {
        deleteContent(content)
        const tasks_form = []
        for (let i = 0; i < projects.length; i++) {
            tasks_form.push(projects[i].tasks_form)
        }
        content.classList.add('Calendar')
        rendering.calendar(tasks_form)
    })
}

function deleteContent(content) {
    while (content.hasChildNodes()) {
        content.removeChild(content.firstChild)
    }
}

document.addEventListener('DOMContentLoaded', DOMInteraction)
*/
