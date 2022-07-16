import { FC } from "react";

enum ESizes {
	"2xl" = 62,
	xl = 48,
	lg = 36,
	md = 24,
	default = 18,
	sm = 16,
}

type sizeType = keyof typeof ESizes;

interface CoinIconProps {
	name: string;
	size?: sizeType;
	className?: string;
}

const CoinIcon: FC<CoinIconProps> = ({ name, className, size = "default" }) => {
	return (
		<img
			width={`${ESizes[size]}px`}
			height={`${ESizes[size]}px`}
			className={["rounded-[50%]", className].join(" ")}
			src={`https://s3-symbol-logo.tradingview.com/crypto/XTVC${name}.svg`}
		/>
	);
};

export default CoinIcon;
