import ISymbol from "@/models/ISymbol";
import addMillionPrefix from "@/utils/addMillionPrefix";

const BINANCE_STREAM = "wss://stream.binance.com:9443/ws";
const BINANCE_API = "https://www.binance.com/api/v1";

interface IBinanceTicker {
	symbol: string;
	priceChange: string;
	priceChangePercent: string;
	weightedAvgPrice: string;
	prevClosePrice: string;
	lastPrice: string;
	lastQty: string;
	bidPrice: string;
	bidQty: string;
	askPrice: string;
	askQty: string;
	openPrice: string;
	highPrice: string;
	lowPrice: string;
	volume: string;
	quoteVolume: string;
	openTime: number;
	closeTime: number;
	firstId: number;
	lastId: number;
	count: number;
}

interface IBinanceSymbol {
	e: string; // Event type
	E: number; // Event time
	s: string; // Symbol
	c: string; // Close price
	o: string; // Open price
	h: string; // High price
	l: string; // Low price
	v: string; // Total traded base asset volume
	q: string; //Total traded quote asset volume
}

const openAllTickerStream = (
	symbols: ISymbol[],
	callBack: (symbols: ISymbol[]) => void
): WebSocket => {
	let symbolsCopy = JSON.parse(JSON.stringify(symbols));
	let stream = new WebSocket(`${BINANCE_STREAM}/!miniTicker@arr`);

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
		let data = JSON.parse(message.data) as IBinanceSymbol[];

		symbolsCopy.forEach((symbol: ISymbol) => {
			const pair = symbol.baseAsset + symbol.quoteAsset;
			let binSymbol = data.find((item) => item.s === pair);

			if (binSymbol) {
				symbol.isBull = symbol.price < +binSymbol.c;
				symbol.price = +binSymbol.c;
				symbol.volume = addMillionPrefix(+binSymbol.q);
			}
		});

		callBack(symbolsCopy);
	};

	return stream;
};

const getSymbols = async (symbols: ISymbol[]): Promise<ISymbol[]> => {
	let pairs = symbols.map((symbol) =>
		(symbol.baseAsset + symbol.quoteAsset).toUpperCase()
	);
	let res = await fetch(
		`${BINANCE_API}/ticker/24hr?symbols=${JSON.stringify(pairs)}`
	);
	let data = (await res.json()) as IBinanceTicker[];

	const newSymbols = symbols.map((symbol, index) => {
		return {
			...symbol,
			price: +data[index].lastPrice,
			volume: addMillionPrefix(+data[index].quoteVolume),
		} as ISymbol;
	});

	return newSymbols;
};

export default { openAllTickerStream, getSymbols };
