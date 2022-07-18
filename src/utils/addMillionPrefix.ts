export default function addMillionPrefix(num: number) {
	let millionNum = num / 1000000;

	if (millionNum > 1) {
		return millionNum.toFixed(2) + "M";
	} else {
		return num.toFixed(2);
	}
}
