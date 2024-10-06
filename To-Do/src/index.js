import { DOMCreator } from './modules/DOMCreator.js'

class ToDo {
    constructor(title, date, description, icon, isDone) {
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

let PROJECTS_OVERVIEW = [{ 'Project': 0, 'Tasks': [] }]
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
        const ul = render.element('ul', '', '')

        container.append(ul)
        main.append(container)

        renderProjects(ul)
    }

    const calendar = () => {

        render.emptyness(main)

        const container = render.element('section', '', 'Calendar')
        const ul = render.element('ul', '', '')

        const year_number = 2024
        const months = [['January', 31], ['February', 29], ['Mars', 31], ['April', 30], ['May', 31], ['June', 30], ['July', 31], ['August', 31], ['September', 30], ['October', 31], ['November', 30], ['December', 31]]

        let month_days = []
        const year = []

        function createMonths() {
            for (let i = 0; i < months.length; i++) {
                for (let day = 1; day <= months[i][1]; day++) {
                    let date = new Date(`${months[i][0]} ${day}, ${year_number}`)
                    month_days.push(date)
                }
                year.push([month_days])
                month_days = []
            }
        }

        function renderMonths() {

            // Criar o nome do mês
            function createMonth(name) {

                const month = document.createElement('div')
                const h1 = document.createElement('h1')

                month.className = 'Month'
                h1.textContent = name

                month.append(h1)
                return month
            }

            // Criar os dias dentro do mês junto com tasks
            function createDay(day, monthIndex) {
                const div = document.createElement('div')
                div.innerHTML = `<p>${day}</p>`
                //getTask(day, div, monthIndex)
                return div
            }

            // Criar o calendário com base nos 365 indexes
            for (let i = 0; i < year.length; i++) {

                const section = document.createElement('section')

                const month = createMonth(months[i][0])
                const monthIndex = i

                // Criar o mês com os dias
                for (let day = 1; day <= year[i][0].length; day++) {
                    const day_div = createDay(day, monthIndex)
                    section.append(day_div)
                }

                month.append(section)
                ul.append(month)
            }

        }

        container.append(ul)
        main.append(container)
       
        createMonths() // Guarda os meses em array
        renderMonths() // Renderiza os meses em tela + junto com as tasks

    }

    
    return { home, calendar }

}


function renderProjects(container) {

    const render = DOMCreator()

    function renderTasks(container, index) {
        PROJECTS_OVERVIEW[index].Tasks.forEach((task) => {
            const li = render.element('li', '', 'Task')
            const input = render.element('input', '', 'Task-Doner')
            render.setAttribute(input, 'type', 'checkbox')
            const task_icon = render.element('span', task.icon, '')
            const task_title = render.element('span', task.title, '')
            task_icon.style.color = task.checkIFDone()
            const span = render.element('div', '', '')
            span.append(task_icon, task_title)
            li.append(span, input)
            container.append(li)
        })
    }

    render.emptyness(container)

    for (let i = 0; i < PROJECTS_DOM.length; i++) {
        const li = render.element('li', '', 'Project')
        if (PROJECTS_DOM[i] == 'button') {
            const button = render.element('button', '', 'Button')
            button.innerHTML = "+"
            li.append(button)
            container.append(li)
            break
        }

        const btn = render.element('button', "<i class='bx bx-message-square-add'></i>", 'Toggle-Dialogue')
        btn.id = i
        const ul = render.element('ul', '', 'Task-Wrapper')

        renderTasks(ul, i)
        li.append(btn, ul)
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
    PROJECTS_OVERVIEW.push({ 'Project': PROJECTS_TOTAL += 1, 'Tasks': [] })

    swapIndex(PROJECTS_DOM)
    renderProjects(container)

}

function TaskForm_Dealer(index) {
    const container = document.querySelector('ul')
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

        renderProjects(container)
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


