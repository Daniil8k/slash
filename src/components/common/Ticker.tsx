import BinanceAPI from "@/api/BinanceAPI";
import ISymbol from "@/models/ISymbol";
import { DEFAULT_COIN_PAIRS } from "@/utils/constants";
import { FC, useEffect, useRef, useState } from "react";
import CoinIcon from "../ui/CoinIcon";

const emptySymbols = DEFAULT_COIN_PAIRS.map((pair) => {
	const [baseAsset, quoteAsset] = pair.split("/");

	return {
		baseAsset,
		quoteAsset,
		price: 0,
		volume: "0",
		isBull: true,
	} as ISymbol;
});

interface TickerProps {
	className?: string;
}

const Ticker: FC<TickerProps> = ({ className }) => {
	const stream = useRef<WebSocket | null>(null);
	const [symbols, setSymbols] = useState<ISymbol[]>(emptySymbols);

	const startStream = (initSymbols: ISymbol[]) => {
		stream.current = BinanceAPI.openAllTickerStream(
			initSymbols,
			(newSymbols) => {
				setSymbols(newSymbols);
			}
		);
	};

	const initTicker = async () => {
		let initSymbolsData = await BinanceAPI.getSymbols(symbols);
		startStream(initSymbolsData);
		setSymbols(initSymbolsData);
	};

	useEffect(() => {
		initTicker();

		return () => {
			stream.current && stream.current.close();
		};
	}, []);

	return (
		<div className={["w-full", className].join(" ")}>
			<div className="grid grid-cols-3 mb-2">
				<div className="comment">Coin</div>
				<div className="comment text-right">Price</div>
				<div className="comment text-right">Volume</div>
			</div>
			<div className="overflow-auto max-h-[78vh]">
				{symbols.map((symbol) => (
					<div
						className="relative grid grid-cols-3 py-1"
						key={symbol.baseAsset}
					>
						<div className="flex items-center gap-2 ml-1">
							<CoinIcon name={symbol.baseAsset} />
							<span>{symbol.baseAsset}</span>
						</div>
						<span className="text-right">
							{symbol.price ? symbol.price : "..."}
						</span>
						<span className="text-right">
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
