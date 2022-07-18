export default interface ISymbol {
	baseAsset: string;
	quoteAsset: string;
	price: number;
	volume: string;
	isBull?: boolean;
}
