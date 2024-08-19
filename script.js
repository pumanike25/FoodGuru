var ingredientsArrayAdd = [{text: '', id: 0}];
var ingredientsArrayDel = [];
var currId = 1;

var popUpFav = document.getElementsByClassName('favWidget')[0];
var popUpFavS = document.getElementsByClassName('popUp')[0];

var popUp = document.getElementsByClassName('popUp')[0];
var popUpSmall = document.getElementsByClassName('clickSearch')[0];

var arrow = document.getElementsByClassName('arrow')[0];

var clickMoon = document.getElementsByClassName('nightMode')[0];
var moon = document.getElementsByClassName('moon')[0];

function handleInput() {
    var input = document.getElementsByClassName('addBar')[0].value;
    //console.log(input);
    var textTest = false;

    ingredientsArrayAdd.forEach( (item) => {
        if (item.text == input) {
            textTest = true;
        }
    });

    if(input =='' || textTest == true)
        return;

    var smallContAdd = document.createElement('div');
    smallContAdd.setAttribute('class', 'smallContAdd');
    smallContAdd.setAttribute('id', String(currId));
    
    var newIng = document.createElement('P');
    newIng.textContent=input;
    newIng.setAttribute('class', 'textAdd');
    smallContAdd.appendChild(newIng);

    var delBtn= document.createElement('button');
    delBtn.setAttribute('class', 'delButtonAdd');
    delBtn.setAttribute('onclick','delElem(' + String(currId) + ')');
    delBtn.textContent = 'Remove';
    smallContAdd.appendChild(delBtn);



   /* var newIng = document.createElement('P');

    newIng.textContent=input;
    newIng.setAttribute('id', String(currId));

    //newIng.setAttribute('onclick', 'delElem(' + String(currId) + ')')

    var delButton = document.createElement('Button');
    delButton.setAttribute('onclick', 'delElem(' + String(currId) + ')')
    delButton.setAttribute('class', "delButton");

    newIng.appendChild(delButton);
*/

    var cont = document.getElementsByClassName('ingredientsAdd')[0];
    cont.appendChild(smallContAdd);

    document.getElementsByClassName('addBar')[0].value = '';
    var newElem = {text: input, id: currId};
    currId++;

    ingredientsArrayAdd.push(newElem);
    console.log(ingredientsArrayAdd);
}

function handleInputDel() {
    var inputDel = document.getElementsByClassName('noBar')[0].value;
    //console.log(inputDel);
    var textTest = false;


    ingredientsArrayDel.forEach( (item) => {
        if (item.text == inputDel) {
            textTest = true;
        }
    });

    if(inputDel =='' || textTest == true)
        return;

    var smallCont = document.createElement('div');
    smallCont.setAttribute('class', 'smallCont');
    smallCont.setAttribute('id', String(currId));

    var newIngD = document.createElement('P');
    newIngD.textContent=inputDel;
    //newIngD.setAttribute('id', String(currId));
    newIngD.setAttribute('class', 'ingrText');
    smallCont.appendChild(newIngD);

    var delBtn = document.createElement('button');
    delBtn.setAttribute('class', 'delButton');
    delBtn.setAttribute('onclick', 'delElem(' + String(currId) + ')');
    delBtn.textContent = 'Remove';
    smallCont.appendChild(delBtn);

    var contD = document.getElementsByClassName('ingredientsNo')[0];
    contD.appendChild(smallCont);
    
    document.getElementsByClassName('noBar')[0].value = '';
    var newElem = {text: inputDel, id: currId};
    currId++;

    ingredientsArrayDel.push(newElem);
    console.log(ingredientsArrayDel);
}

//search bar => widget up 

function barSearch() {
   
    popUp.style.bottom = '0';
    popUpSmall.setAttribute("onclick", "barSearchDown()");

    arrow.setAttribute("src", "arrow-down-solid.svg")
}

function barSearchDown() {

    popUp.style.bottom = '-82.1%';
    popUpSmall.setAttribute("onclick", "barSearch()");

    arrow.setAttribute("src", "arrow-up-solid.svg")
}

function colorShow() {

    document.body.classList.toggle('dark-mode');

    //clickMoon.setAttribute("onclick", "colorShow()")
    //moon.setAttribute("src", "sun-solid.svg");

    const img = document.querySelector('.nightMode img');

    if (document.body.classList.contains('dark-mode')) {
        img.src = 'sun-solid.svg'; 
    } else {
        img.src = 'moon-solid.svg';

    }
}
function favBarShow() {

    popUpFav.style.left= '0%';
}

function favBarDis() {

    popUpFav.style.left= '-45%';
}

function delElem(id) {

    let iterator;
    document.getElementById(id).remove();
    iterator = ingredientsArrayAdd.keys();
    for (const key of iterator) {
        if (ingredientsArrayAdd[key].id == id) {
            ingredientsArrayAdd.splice(key, 1);
        }
    }

    iterator = ingredientsArrayDel.keys();
    for (const key of iterator) {
        if (ingredientsArrayDel[key].id == id) {
            ingredientsArrayDel.splice(key, 1);
        }
    }
}