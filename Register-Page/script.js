document.addEventListener('DOMContentLoaded', () => {
    var invalid = []

    function CustomMessage() {

        const span = document.querySelectorAll('span')

        const name = (message) => {
            span[0].innerText = message
        }

        const email = (message) => {
            span[1].innerText = message
        }
        
        const password = (message) => {
            span[2].innerText = message
        }
        
        const confirm = (message) => {
            span[3].innerText = message
        }
        
        return { name, email, password, confirm  }
    }
    
    function checkForms(field) {
        
        const setCustomMessage = CustomMessage()
        const fields = document.querySelectorAll('.Field')
        if (field.id == 'name') {
            if (field.value.length < 5) {
                setCustomMessage.name('Nome deve ter 5 chars')
                fields[0].classList.add('Invalid')
                invalid[0] = true
            }          
            else {
                fields[0].classList.remove('Invalid')
                invalid[0] = false
                setCustomMessage.name('')
            }      
        }

        if (field.id == 'email') {
            const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
            if (!(regex.test(field.value))) {
                setCustomMessage.email('Insira no formato de email! (gmail, hotmail ou outlook.)')
                fields[1].classList.add('Invalid')
                invalid[1] = true
            }
            else {
                fields[1].classList.remove('Invalid')
                setCustomMessage.email('')
                invalid[1] = false
            }
           
        }

        if (field.id == 'password') {
            if (field.value.length < 6) {
                setCustomMessage.password('Senha deve ter mais de 6 chars!')
                fields[2].classList.add('Invalid')
                console.log(fields[2])
                invalid[2] = true
            }
            else {
                fields[2].classList.remove('Invalid')
                setCustomMessage.password('')
                invalid[2] = false
            }
        }

        else if (field.id == 'confirm-password') {
            const password = document.querySelector('#password')
            if (field.value != password.value) {
                setCustomMessage.password('Senhas não coincidem!')
                setCustomMessage.confirm('Senhas não coincidem!')
                fields[2].classList.add('Invalid')
                fields[3].classList.add('Invalid')
                invalid[2] = true  
                invalid[3] = true           
            }
            else {
                fields[2].classList.remove('Invalid')
                fields[3].classList.remove('Invalid')
                setCustomMessage.confirm('')
                invalid[2] = false 
                invalid[3] = false
            }
        }
        return invalid
    }

    function formValidation() {

        const input_fields = document.querySelectorAll('input')
        const submit = document.querySelector('#submit')
        
        input_fields.forEach((field) => {

            field.addEventListener('input', () => {
                checkForms(field)
            })

            submit.addEventListener('click', (e) => {
                const invalid_fields = checkForms(field)
                invalid_fields.forEach((field) => {if (field == false) {e.preventDefault() }})
            })

        })


    }

    formValidation()

})