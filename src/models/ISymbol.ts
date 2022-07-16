export default interface ISymbol {
	baseAsset: string;
	quoteAsset: string;
	price: number;
	volume: number | string;
	isBull?: boolean;
}
