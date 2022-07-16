const BINANCE_STREAM = "wss://stream.binance.com:9443/ws";
const BINANCE_API = "https://www.binance.com/api/v1";

interface ISymbolData {
	price: number;
	volume: string;
}

const addMillionPrefix = (num: number) => {
	let millionNum = num / 1000000;

	if (millionNum > 1) {
		return millionNum.toFixed(2) + "M";
	} else {
		return num.toFixed(2);
	}
};

const openBinanceStream = (
	symbol: string,
	callBack: (symbol: ISymbolData) => void
): WebSocket => {
	symbol = symbol.replace("/", "").toLowerCase();
	let stream = new WebSocket(`${BINANCE_STREAM}/${symbol}@miniTicker`);

	stream.onopen = () => {
		console.log("[socket] Connected to exchange");
	};

	stream.onclose = () => {
		console.log("[socket] Connection closed");
	};

	stream.onerror = (error) => {
		console.log("[socket] Error:", error);
	};

	stream.onmessage = (message) => {
		let data = JSON.parse(message.data);
		let symbolData = {
			price: +data.c,
			volume: addMillionPrefix(+data.q),
		} as ISymbolData;

		callBack(symbolData);
	};

	return stream;
};

const getBinanceSymbolData = async (pair: string) => {
	try {
		let symbol = pair.replace("/", "").toUpperCase();
		let res = await fetch(`${BINANCE_API}/ticker/24hr?symbol=${symbol}`);
		let data = await res.json();
		let symbolData = {
			price: +data.lastPrice,
			volume: addMillionPrefix(+data.quoteVolume),
		} as ISymbolData;

		return symbolData;
	} catch (error) {
		console.log(error);
	}
};

export { openBinanceStream, getBinanceSymbolData };
