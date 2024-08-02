// Mostrar elementos em tela corretamente

var is_result_there = false

function DOMInteraction() {

    const Buttons = document.querySelectorAll('button')
    const Visor = document.querySelector('.Visor')

    Buttons.forEach((button) => {
        button.addEventListener('click', () => {
            /*
            if (is_result_there) { 
                deleteAll(Visor)
                is_result_there = false
            }
            */           

            if (button.className.includes('Delete')) {
                deleteAll(Visor)
                return
            }

            if (button.className == 'Operator' && Visor.innerText == "") {
                deleteAll(Visor)
                return
            }

            if (button.className.includes('Equal')) {
                evaluateExpression(Visor)
                return
            }

            displayVisor(button, Visor)

        })
    })

}

function deleteAll(DIV) {
    while (DIV.hasChildNodes()) {
        DIV.removeChild(DIV.firstChild)
    }
}
function displayVisor(btn, Visor) {
    Visor.textContent += btn.value
}

function evaluateExpression(Visor) {

    const expression = Visor.textContent
    var evaluate_result 

    try {
        evaluate_result = eval(expression)
    }
    catch(e) {
        evaluate_result = "Algo deu errado com a expressão inserida!"
    }

    Visor.textContent = evaluate_result
    is_result_there = true

}
/*
function Calculator() {

}
*/

document.addEventListener('DOMContentLoaded', DOMInteraction)