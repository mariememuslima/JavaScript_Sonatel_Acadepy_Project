var Tableau = ["Mon Premier", "Mon Deuxième", "Mon Troisième", "Mon Quatrième"]
for (let i of Tableau) {
    let p = document.createElement('p');
    p.setAttribute("class", "pclass")
    p.innerHTML = i
    let div = document.getElementById("borderLeft")
    div.appendChild(p)
}


var p = document.querySelectorAll("p")
for (let i of p) {
    i.addEventListener('mouseover', () => {
        i.style.backgroundColor = 'white'
    })
}
var editBouton = document.querySelector("#buttonChoiceFirst")
for (let i of p) {
    editBouton.addEventListener('click', () => {
        if (i.style.backgroundColor === "white") {
            let div = document.getElementById("borderRight")
            i.style.backgroundColor = "rgb(164, 164, 164)"
            div.appendChild(i)
        }
    })
}
var editBoutonReturn = document.querySelector("#buttonChoiceLast")
for (let j of p) {
    editBoutonReturn.addEventListener('click', () => {
        if (j.style.backgroundColor === "white") {
            let div1 = document.getElementById("borderLeft")
            j.style.backgroundColor = "rgb(164, 164, 164)"
            div1.appendChild(j)
        }
    })
}