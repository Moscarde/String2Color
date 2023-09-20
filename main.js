const stringTest = "Hello World!";

let charCodeList = [];
for (let i = 0; i < stringTest.length; i++) {
	charCodeList.push(stringTest.charCodeAt(i));
}

console.log(charCodeList);


// quantidade de caracteres dividido pela quantidade de letras
const listSplitted = charCodeList.length / 3; 

// quantidade de caracteres arredondado
const listSplittedRounded = Math.floor(listSplitted); 

let R = [];
let G = [];
let B = [];

let count = 1;
for (let i = 0; i < charCodeList.length; i++) {
    if (count <= listSplittedRounded) {
        R.push(charCodeList[i]);
        count++;
    } else if (count <= listSplittedRounded * 2) {
        G.push(charCodeList[i]);
        count++;
    } else if (count > listSplittedRounded * 2) {
        B.push(charCodeList[i]);
        count++;
    }
}

console.log('R:',R);
console.log('G:',G);
console.log('B:',B);



