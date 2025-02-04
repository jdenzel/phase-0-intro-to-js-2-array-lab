// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const newCat = [...cats, name];
    return newCat;
}

function prependCat(name){
    const newCat = [name, ...cats];
    return newCat;
}

function removeLastCat(){
    const lastLessCat = cats.slice(0, -1);
    return lastLessCat;
}
function removeFirstCat(){
    const firstLessCat = cats.slice(1);
    return firstLessCat;
}

