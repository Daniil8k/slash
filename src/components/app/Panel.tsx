import { FC, useEffect, useRef, useState } from "react";
import Ticker from "@/components/common/Ticker";

interface PanelProps {
	className?: string;
}

const Panel: FC<PanelProps> = ({ className }) => {
	return (
		<div
			className={[
				"card flex flex-col items-center px-2",
				className,
			].join(" ")}
		>
			<div className="mb-4">Coin Market</div>
			<Ticker />
		</div>
	);
};

export default Panel;
