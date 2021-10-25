const squareCont = document.getElementById("containerSquare")




for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) squareCont.innerHTML += `<div class=fizzbuzz>
    ${i}
    </div>`;
    else if (i % 3 == 0) squareCont.innerHTML += `<div class=fizz>
    ${i}
    </div>`;
    else if (i % 5 == 0)  squareCont.innerHTML += `<div class=buzz>
    ${i}
    </div>`;

}