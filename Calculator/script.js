// Mostrar elementos em tela corretamente

function DOMInteraction() {

    const Buttons = document.querySelectorAll('button')
    const Visor = document.querySelector('.Visor')

    Buttons.forEach((button) => {
        button.addEventListener('click', () => {
            displayVisor(button, Visor)
            /*
            if (button.className.includes('Number')) { displayVisor(button) }
            if (button.className.includes('Operator')) { displayHistory(button) }
            */
        })
    })

}

function Calculator() {

}

document.addEventListener('DOMContentLoaded', DOMInteraction)