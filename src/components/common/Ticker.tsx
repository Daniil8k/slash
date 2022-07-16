import { getBinanceSymbolData, openBinanceStream } from "@/api/Binance";
import ISymbol from "@/models/ISymbol";
import { FC, useEffect, useState } from "react";
import CoinIcon from "../ui/CoinIcon";

interface ITicker {
	[key: string]: ISymbol;
}

const PAIRS = [
	"BTC/USDT",
	"ETH/USDT",
	"USDC/USDT",
	"BNB/USDT",
	"BUSD/USDT",
	"XRP/USDT",
	"ADA/USDT",
	"SOL/USDT",
	"DOGE/USDT",
	"DOT/USDT",
	"TRX/USDT",
	"SHIB/USDT",
	"MATIC/USDT",
	"AVAX/USDT",
	"UNI/USDT",
	"LTC/USDT",
	"FTT/USDT",
	"LINK/USDT",
	"XLM/USDT",
	"ATOM/USDT",
	"NEAR/USDT",
	"XMR/USDT",
	"ALGO/USDT",
	"BCH/USDT",
	"ETC/USDT",
];

const initTicker = () => {
	let tickerObj = {} as any;

	PAIRS.forEach((pair) => {
		let [baseAsset, quoteAsset] = pair.split("/");
		tickerObj[pair] = {
			baseAsset,
			quoteAsset,
			price: 0,
			volume: 0,
			isBull: true,
		} as ISymbol;
	});

	return tickerObj;
};

interface TickerProps {
	className?: string;
}

const Ticker: FC<TickerProps> = ({ className }) => {
	let streams = [] as WebSocket[];
	const [ticker, setTicker] = useState<ITicker>(initTicker());

	const requestInitSymbols = async () => {
		Object.keys(ticker).map(async (pair) => {
			let data = await getBinanceSymbolData(pair);

			if (data) {
				updateTicker(pair, data.price, data.volume);
			}
		});
	};

	const updateTicker = (pair: string, price: number, volume: string) => {
		setTicker((ticker) => {
			let newTicker = JSON.parse(JSON.stringify(ticker));

			newTicker[pair].isBull = price > ticker[pair].price;
			newTicker[pair].price = price;
			newTicker[pair].volume = volume;

			return newTicker;
		});
	};

	const openStreams = () => {
		Object.keys(ticker).forEach((pair) => {
			let stream = openBinanceStream(pair, (symbol) => {
				updateTicker(pair, symbol.price, symbol.volume);
			});

			streams.push(stream);
		});
	};

	useEffect(() => {
		requestInitSymbols();
		openStreams();

		return () => {
			streams.forEach((stream) => stream.close());
		};
	}, []);

	return (
		<div className={["", className].join(" ")}>
			<div className="grid grid-cols-3 mb-2">
				<div className="comment">Coin</div>
				<div className="comment text-right">Price</div>
				<div className="comment text-right">Volume</div>
			</div>
			<div className="overflow-auto max-h-[78vh]">
				{Object.values(ticker).map((symbol) => (
					<div
						className="relative grid grid-cols-3 py-1"
						key={symbol.baseAsset}
					>
						<div className="flex items-center gap-2 ml-1">
							<CoinIcon name={symbol.baseAsset} />
							<span className="text-sm">{symbol.baseAsset}</span>
						</div>
						<span className="text-sm text-right">
							{symbol.price ? symbol.price : "..."}
						</span>
						<span className="text-sm text-right">
							{symbol.volume ? symbol.volume : "..."}
						</span>
						{!!symbol.price && (
							<div
								key={symbol.price}
								className={[
									"absolute w-full h-full",
									symbol.isBull ? "success-blink-anim" : "danger-blink-anim",
								].join(" ")}
							></div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Ticker;
