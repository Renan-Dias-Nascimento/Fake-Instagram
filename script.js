//console.log ("Faz essa coisa rodar");

let btnVerMais = document.querySelector('#more');
let card = document.querySelector('.card');
let formulario = document.querySelector("form");
let heart = document.querySelector('.likes img');
let main = document.querySelector('main');
let numeroLikes = document.querySelector('.likes b');

// let elemento = Event.Target;
//let numeroLikes = true

//console.log(numeroLikes);

//____________1____________//

btnVerMais.onclick = function(event) {
    var cardClone = card.cloneNode(true);
    main.insertBefore(cardClone, btnVerMais);
}


//_____________4____________//
btnVerMais.onmouseover = function (event) {
    btnVerMais.style = "cursor: pointer"
}


//_______________3________________//

formulario.onmouseover = function (event) {
    formulario.style = "box-shadow: 0px 1px 3px black"
}

formulario.onmouseout = function (event) {
    formulario.style = "box-shadow: none"
}

//______________2_______________//
heart.onmouseover = function (event) {
    heart.style = "cursor: pointer";
}

heart.onclick = function (event) {
    if (heart.getAttribute('src') == "/img/icons/heart.svg") {
    heart.src = "img/red-heart.png";
    numeroLikes.innerHTML = "2 likes"
    }
    else {
        heart.src = "/img/icons/heart.svg";
        numeroLikes.innerHTML = "1 likes"
    }
}
//não consegui fazer um contador de likes "infinito"