class Task {
    constructor(project, name, date, section) {
        this.project = project
        this.name = name
        this.date = date
        this.section = section
    }
}

export function render() {

    const content = document.querySelector('main')

    // Renderiza a página de projeto
    const project = (name, icon, tasks) => {

        // Criar o título = nome + icon
        function createTitle() {
            const h1 = document.createElement('h1')
            h1.textContent = icon + ' ' + name
            content.append(h1)
        }

        // Input para inserir a task
        function createInput() {

            const form = document.createElement('form')

            const section = document.createElement('section')
            const label = document.createElement('label')
            label.textContent = 'Insira a sua tarefa: '
            const input = document.createElement('input')
            input.setAttribute('type', 'text')
            input.id = 'task'

            const section2 = document.createElement('section')
            const label2 = document.createElement('label')
            label2.textContent = 'Insira a data para finalizar a tarefa: '
            const input2 = document.createElement('input')
            input2.setAttribute('type', 'date')
            input2.id = 'date'

            const submit = document.createElement('input')
            submit.setAttribute('type', 'submit')
            submit.id = 'add-task'
            submit.setAttribute('value', 'Add')

            section.append(label, input)
            section2.append(label2, input2)
            form.append(section, section2, submit)
            content.append(form)

        }

        // Criação das tasks
        function createTask() {

            const section = document.createElement('section')
            const label = document.createElement('label')
            const task = document.createElement('input')

            section.className = 'Task'

            const div_task = document.createElement('div')
            div_task.id = 'task-container'

            const input = document.querySelector('#task')
            const input2 = document.querySelector('#date')

            task.setAttribute('type', 'checkbox')
            const close = document.createElement('span')
            close.className = 'checkmark'
            close.innerHTML = 'X'

            div_task.append(task, label)
            label.textContent = input.value

            section.append(div_task, close)
            content.append(section)

            tasks.push(new Task(name, input.value, input2.value, section))

            task.addEventListener('click', () => {
                label.style.textDecoration = 'line-through'
            })
        }

        // Renderização do array com tasks
        function renderTask(tasks) {
            for (let i = 0; i < tasks.length; i++) {
                content.append(tasks[i].section)
            }
        }

        createTitle()
        createInput()
        renderTask(tasks)

        const submit = document.querySelector('#add-task')

        submit.addEventListener('click', (e) => {
            e.preventDefault()
            createTask()
        })
    }

    const calendar = (tasks) => {
        
        function createCalendar() {

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
                    getTask(day, div, monthIndex)
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
                    content.append(month)
                }

            }

            function getTask(day, div, monthIndex) {

                function renderTask(task, div) {

                    function createButton() {
                        const button = document.createElement('button')
                        button.id = 'task'
                        button.innerHTML = task.project
                        return button
                    }

                    function createTaskWindow() {
                        const window = document.createElement('div2')
                        window.className = 'Window'
                        window.innerHTML = `TASK DO DIA: ${task.name}`
                        return window
                    }

                    const button = createButton()
                    const window = createTaskWindow()

                    div.append(button, window)

                }
                // Loop para renderizar as tasks com base na data
                for (let i = 0; i < tasks.length; i++) {
                    for (let q = 0; q < tasks[i].length; q++) {
                        const task = tasks[i][q]
                        const date = new Date(task.date)
                        const calendary_day = date.getDate(date.setDate(date.getDate() + 1))
                        // Verifica se a data no calendário bate com a task (mês, dia)
                        if (calendary_day == day && date.getMonth() == monthIndex) { renderTask(task, div) }
                    }
                }
            }

            createMonths() // Guarda os meses em array
            renderMonths() // Renderiza os meses em tela + junto com as tasks

        }

        function hoverTask() {
            const task = document.querySelectorAll('#task')
            const div2 = document.querySelectorAll('.Window')
            console.log(task, div2, 'hovertask')
            task.forEach((t) => {
                t.addEventListener('mouseenter', () => {
                    div2.forEach((d) => {
                        d.classList.add('Open')
                        d.classList.remove('Closed')
                    })
                })
                t.addEventListener('mouseleave', () => {
                    div2.forEach((d) => {
                        d.classList.add('Closed')
                        d.classList.remove('Open')
                    })
                })
            })
        }

        createCalendar()
        hoverTask()
    }

    return { project, calendar }
}



