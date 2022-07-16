import { ESizes, sizeType } from "@/utils/constants";
import { FC } from "react";

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
