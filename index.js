let first = document.getElementById("one")
let second = document.getElementById("two")
let count1 = 0
let count2 =0 
function add11(){
    count1 = 1 + count1
    first.innerText = count1
}

function add21(){
    count1 = 2 + count1
    first.innerText = count1
}

function add31(){
    count1 = 3 + count1
    first.innerText = count1
}

function add12(){
    count2 = 1 + count2
    second.innerText = count2
}

function add22(){
    count2 = 2 + count2
    second.innerText = count2
}

function add32(){
    count2 = 3 + count2
    second.innerText = count2
}