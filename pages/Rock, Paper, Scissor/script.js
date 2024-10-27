let player_points = 0
let computer_points = 0

function DOMInteraction() {
    
    const play_showcase = document.querySelectorAll(".Showcase")
    const point_showcase = document.querySelectorAll("#box")
    const message_showcase = document.querySelector(".Message")
    const pick_buttons = document.querySelectorAll(".play")

    const dialog_pick = document.querySelector(".Pick")
    const dialog_refresh = document.querySelector(".Restart")
    const dialog_button = document.querySelector("#refresh")
    const main = document.querySelector(".Main")
    
    function getPlayerInput() {

        for (let i = 0; i < pick_buttons.length; i++) {
            pick_buttons[i].addEventListener("click", () => {

                toggleDialogue()

                let player = pick_buttons[i].id 
                let computer = getComputerPlay()
                let message = getResult(player, computer)
                let gameState = getGameState()

                endGame(gameState)
                updateDOM(message_showcase, play_showcase, point_showcase, player, computer, message)
               
            })
        }
    }

    function updateDOM(message_show, play_show, points_show, play1, play2, message) {

        function clean(DIV) {
            DIV.innerHTML = ""
        }

        function updatePlays() {

            clean(play_show[0])
            clean(play_show[1])

            play_show[0].innerHTML = play1
            play_show[1].innerHTML = play2

        }

        function updateMessage() {
            clean(message_show)
            message_show.innerHTML = message
        }

        function updatePoints() {

            clean(points_show[0])
            clean(points_show[1])

            points_show[0].innerHTML = player_points
            points_show[1].innerHTML = computer_points
        }

        updatePlays()
        updateMessage()
        updatePoints()

    }

    function toggleDialogue() {
        dialog_pick.classList.toggle("Hidden")
        main.classList.toggle("Blur")
    }

    function endGame(boolean) {
        if (boolean) {
            message_showcase.style.color = "red"   
            setTimeout(restartGame, 5000)
        }
        else {
            setTimeout(toggleDialogue, 5000)
        }
    }

    function restartGame() {
        dialog_refresh.classList.toggle("Hidden")
        refresh.addEventListener("click", () => {
            window.refresh()
        })
    }   

    getPlayerInput()
}

function getComputerPlay() {
    let array = ["rock", "paper", "scissor"]
    let index = Math.floor(Math.random() * array.length)
    let play = array[index]
    return play
}

function getResult(player, computer) {

    if (player == computer) {
        return "It's a tie"
    }

    let matriz = [["paper", "rock"], ["scissor", "paper"], ["rock", "scissor"]]
    let winner_found 
    for (let i = 0; i < matriz.length; i++) {
        if (player == matriz[i][0] && computer == matriz[i][1]) {
            winner_found = true 
        }
    }

    if (winner_found) {
        player_points += 1
        return "Player wins!"
    }
    else {
        computer_points += 1
        return "Computer wins!"
    }

}

function getGameState() {
    if (player_points == 5 || computer_points == 5) {
        return true
    }
    else {
        return false
    }
}

DOMInteraction()