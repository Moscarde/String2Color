let inputString = "Teste";

if (process.argv[2] != undefined) {
    inputString = process.argv[2];
}

function string2color(inputString) {
	let charCodeList = [];
	for (let i = 0; i < inputString.length; i++) {
		charCodeList.push(inputString.charCodeAt(i));
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

	let rSum = 0;
	R.forEach((charCode) => {
		rSum += charCode;
	});

	let gSum = 0;
	G.forEach((charCode) => {
		gSum += charCode;
	});

	let bSum = 0;
	B.forEach((charCode) => {
		bSum += charCode;
	});

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

	return "#" + rFinal + gFinal + bFinal;
}


console.log(`
====> String2Color <====
~~~~~ ${inputString}
~~~~~ ${string2color(inputString)}`);
