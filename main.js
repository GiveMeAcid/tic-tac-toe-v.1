var load_zone = window.zone;//getElementById
var id = "pole";
var gameLive = true;
console.log(load_zone);

//создание полей
function createField(index) {
    console.log(index);
    fieldSize(index);
    load_zone.innerHTML = '';
    for (var i = 0; i < index; i++) {
        for (var j = 0; j < index; j++) {
            var div = document.createElement('div');
            div.className = "box";
            var newInput = document.createElement('input');
            newInput.type = "text";
            newInput.id = id + (i + j + i * 2);
            newInput.onclick = click;
            div.appendChild(newInput);
            load_zone.appendChild(div);
        }
    }
}

function fieldSize(index) {
    if (index === 3) {
        load_zone.classList.remove('zone1');
        load_zone.classList.add('zone');
    } else {
        load_zone.classList.remove('zone');
        load_zone.classList.add('zone1');
    }
}

//функция нажатия и вызова "Х"
function click(event) {
    var target_element = document.getElementById(event.target.id);
    if (!target_element.value.length) {
        target_element.value = 'x';
        checkVictory();
        if (gameLive) {
            AI();
        }
    }
}

function randNum(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// бот
function AI() {
    var rand = randNum(0, 8);
    var elem = document.getElementById(id + rand);
    if (elem.value === 'x' || elem.value === 'O') {
        AI()
    } else {
        elem.value = 'O';
    }
}

function checkVictory() {
    var count = 0;

    for (var i = 0; i < 9; i++) {
        if (!document.getElementById(id + i).value) {
            ++count;
        }
    }

    if (count === 0) {
        gameLive = false;
        alert('game over');
    }
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



