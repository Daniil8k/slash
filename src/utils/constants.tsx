export enum ESizes {
	"2xl" = 62,
	xl = 48,
	lg = 36,
	md = 24,
	default = 24,
	sm = 16,
}

export type sizeType = keyof typeof ESizes;

export const DEFAULT_COIN_PAIRS = [
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
