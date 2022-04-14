function genererNote() {
    let maNote = `<div class="laNote">
    <div class="tache">
        <div id="edit"><img onClick='editNote(event)' src="pen_to_square_solid.svg" alt=""></i></div>
        <div id="trash"><img onClick='deleteNote(event)' src="trash_can_solid.svg" alt=""></i></div>
    </div>
    <textarea id="text" disabled></textarea>
    </div>`
    let main = document.createElement('main');
    main.innerHTML = maNote
    let div = document.getElementById("conteneur")
    div.appendChild(main)
}

function deleteNote(event) {
    let taille = document.querySelectorAll(".laNote")
    if (taille.length > 1) {
        let div = event.target.parentNode.parentNode.parentNode.parentNode.querySelector(".laNote")
            // console.log(div)
        div.remove()
    }

}

function editNote(event) {
    let div = event.target.parentNode.parentNode.parentNode.querySelector("#text").disabled = false
        // let div = document.querySelector(".text").disabled = false
        // la couleur du texte doit changer
        // div.classList.toggle("hidden")
}

//     main.classList.toggle("hidden")
//     textArea.classList.toggle("hidden");