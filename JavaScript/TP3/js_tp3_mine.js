const container = document.getElementById('container');
const length = document.getElementById('length');
const upper = document.getElementById('upper');
const lower = document.getElementById('lower');
const number = document.getElementById('number');
const symbol = document.getElementById('symbol');
const button = document.getElementById('button');
const resultat = document.getElementById('result');
const genererPassword = document.getElementById('button');
const clipboardEl = document.getElementById('clipboard');
// var taille = parseInt(length.value)
// console.log(typeof(taille))

// LES EVENEMENTS
genererPassword.addEventListener('click', () => {
        let test = genererateurPassword(parseInt(length.value), upper.checked, lower.checked, number.checked, symbol.checked)
        resultat.innerText = test
    })
    //code de génération
function genererateurPassword(estTaille, estUpper, estLower, estNumber, estSymbol) {
    var listeFunction = new Array();
    var choices = { "taille": estTaille, "majuscule": estUpper, "minuscule": estLower, "number": estNumber, "symbol": estSymbol };
    var password = '';
    const randomFunc = {
        minuscule: generateurMinuscule,
        majuscule: generateurMajuscule,
        number: generateurNombre,
        symbol: generateurSymbole
    };
    for (key in choices) {
        if (key !== "taille") {
            if (choices[key] === true) {
                listeFunction.push(randomFunc[key])
            }
        }
    }
    for (let i = 0; i < estTaille; i++) {
        let test = listeFunction[Math.floor(Math.random() * listeFunction.length)]()
        password += test;
    }
    return password
}

function generateurMinuscule() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function copyPassword() {
    const textarea = document.createElement("textarea")
    const password = resultat.innerText;
    if (!password) {
        return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy')
    textarea.remove();
    alert('Mot de passe copié!')
        // resultat.select()
}

function generateurMajuscule() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function generateurNombre() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function generateurSymbole() {
    const symboles = "&~#{[|@]}%µ*$£!§/";
    return symboles[Math.floor(Math.random() * symboles.length)]
}