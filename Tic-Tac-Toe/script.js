class TicTacToe {

    matriz = [[], [], [],
              [], [], [],
              [], [], []]

    winner = [[[0], [1], [2]]]

    constructor (activePlayer) {
        this.activePlayer = activePlayer
    }

    generateBoard() {
        const DIV = document.createElement('div')
        DIV.classList.add('Grid')
        return DIV
    }

    markMatriz(i) {
        this.matriz[i] = this.activePlayer
    }

    switchPlayer(symbol) {

        if (symbol == "X") {
            return "O"
        }

        else {
            return "X"
        }

    }

}

function interactDOM() {

    const board = new TicTacToe()

    function getPlayers() {

        const buttons = document.querySelectorAll('.Button')
        
        buttons.forEach((btn) => {
            btn.addEventListener('click', () => {
                board.activePlayer = btn.id 
            })
        })

    }

    function renderGame() {
        const table = document.querySelector('.Table')
        for (let i = 0; i < board.matriz.length; i++) {
            table.append(board.generateBoard())
        }

    }
    
    function interactGame() {

        function makePlay(i) {
            board.markMatriz(i)
            renderPlays(board.matriz)
        }

        function makeOppositePlay() {
            
            function getIndex() {
                do {
                    i = Math.floor(Math.random() * board.matriz.length)
                } while (board.matriz[i] != "")
                return i 
            }

            const index = getIndex()
            
            board.markMatriz(index)

            renderPlays(board.matriz)

        }

        const DIV = document.querySelectorAll('.Grid')
        
        for (let i = 0; i < DIV.length; i++) {
            DIV[i].addEventListener('click', () => {
                makePlay(i)
                makeOppositePlay()
            })
        }

    }

    function renderPlays(matriz) {

        const DIV = document.querySelectorAll('.Grid')
        for (let i = 0; i < matriz.length; i++) {
            if (matriz[i] != "") {
                DIV[i].textContent = matriz[i]
            }   
        }

        board.activePlayer = board.switchPlayer(board.activePlayer)

    }

    getPlayers()
    renderGame()
    interactGame()

} 


interactDOM()


