<!-- - Напишіть код,  котрий :-->
<!--&#45;&#45; отримує текст з параграфа з id "content"-->
const getEl = document.getElementById('content');
const text1 = getEl.innerText;
console.log(text1);

// <!--&#45;&#45; отримує текст з блоку з id "rules"-->
const getEl2 = document.getElementById('rules');
const text2 = getEl2.innerText;
console.log(text2);
console.log(document.getElementById('rules').innerText);

// <!--&#45;&#45; замініть текст параграфа з id 'content' на будь-який ін
const changeEl = getEl.innerText = 'lhgljhgljhg';


// <!--&#45;&#45; замініть текст параграфа з id 'rules' на будь-який інший-->
const changeEl2 = getEl2.innerText = 'jhglgliyg;iuglifyrsutesytfluhlhlilhgljhgljhg';
// <!--&#45;&#45; змініть кожному елементу колір фону на червоний-->
let children = document.body.children;
for (const child of children) {
    child.style.background = 'red';
// <!--&#45;&#45; змініть кожному елементу колір тексту на синій-->
    child.style.color = 'blue';
}
let textcolor = document.querySelectorAll('*');
for (const textcolorElement of textcolor) {
    textcolorElement.style.color = 'green'
}

// <!--&#45;&#45; отримати весь список класів елемента з id=rules і вивести їх в console.log-->

console.log(document.getElementById('rules').classList);
console.log(getEl2.classList);
// <!--&#45;&#45; поміняти колір тексту у всіх елементів fc_rules на червоний-->

let fcList = document.getElementsByClassName('fc_rules');
for (const fcListElement of fcList) {
    fcListElement.style.color = 'black'
}

