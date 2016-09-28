var load_zone = window.zone;

for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
        var div = document.createElement('div');
        div.className = "box";

        var newInput = document.createElement('input');
        newInput.type = "text";
        newInput.id = (i+j+i*2);
        newInput.id++;
        div.appendChild(newInput);
        load_zone.appendChild(div);
    }
}

function determineWinner() {
    iSize = count(document.getElementById("newInput"));
}

function determineMass() {
}
// var zone = document.getElementById("zone");
//
// for (var i = 0; i = zone.childElementCount; i++) {
//
// }
//
// function generateEmpty() {
//     return document.createElement("div");;
// }
//
// function setX(element) {
//     element.className = "X";;
// }
//
// function setO(element) {
//     element.className = "O";
// }
//
// function () {
//
// }



