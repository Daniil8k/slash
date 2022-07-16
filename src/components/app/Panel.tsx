import { FC, useEffect, useRef, useState } from "react";
import Ticker from "@/components/common/Ticker";

interface PanelProps {
	className?: string;
}

const Panel: FC<PanelProps> = ({ className }) => {
	return (
		<div
			className={[
				"flex flex-col items-center bg-card p-2 rounded-md",
				className,
			].join(" ")}
		>
			<div className="mb-4">Coin Market</div>
			<Ticker />
		</div>
	);
};

export default Panel;
