let player_points = 0
let computer_points = 0

function DOMInteraction() {
    
    const play_showcase = document.querySelectorAll(".Showcase")
    const point_showcase = document.querySelectorAll("#box")
    const pick_buttons = document.querySelectorAll(".play")
    const message = document.querySelector(".Message")

    console.log(play_showcase, point_showcase, pick_buttons, message)
}

DOMInteraction()