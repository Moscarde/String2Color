const stringTest = "KKKlo World";

let charCodeList = [];
for (let i = 0; i < stringTest.length; i++) {
	charCodeList.push(stringTest.charCodeAt(i));
}

const charCodeListBy3 = Math.floor(charCodeList.length / 3);

let R = [];
let G = [];
let B = [];

let count = 1;
for (let i = 0; i < charCodeList.length; i++) {
	if (count <= charCodeListBy3) {
		R.push(charCodeList[i]);
		count++;
	} else if (count <= charCodeListBy3 * 2) {
		G.push(charCodeList[i]);
		count++;
	} else if (count > charCodeListBy3 * 2) {
		B.push(charCodeList[i]);
		count++;
	}
}

console.log("R:", R);
console.log("G:", G);
console.log("B:", B);

let rSum = 0;
R.forEach((charCode) => {
	rSum += charCode;
});

let gSum = 0;
G.forEach((charCode) => {
    gSum += charCode;
})

let bSum = 0;
B.forEach((charCode) => {
    bSum += charCode;
})

let rFinal = (rSum % 256).toString(16).toUpperCase();
let gFinal = (gSum % 256).toString(16).toUpperCase();
let bFinal = (bSum % 256).toString(16).toUpperCase();

if (rFinal.length < 2) {
    rFinal = "0" + rFinal;
}
if (gFinal.length < 2) {
    gFinal = "0" + gFinal;
}
if (bFinal.length < 2) {
    bFinal = "0" + bFinal;
}


console.log("Final Hexadecilmal Color: #" + rFinal + gFinal + bFinal);
