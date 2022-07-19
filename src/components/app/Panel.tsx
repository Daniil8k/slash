import { FC, useEffect, useRef, useState } from "react";
import Ticker from "@/components/common/Ticker";

interface PanelProps {
	className?: string;
}

const Panel: FC<PanelProps> = ({ className }) => {
	return (
		<div
			className={["card flex flex-col items-start px-2", className].join(" ")}
		>
			<a
				href="https://binance-docs.github.io/apidocs/#websocket-market-streams"
				target="_blank"
				className="mb-4 hover:underline"
			>
				WebSocket Binance Stream
			</a>
			<Ticker />
		</div>
	);
};

export default Panel;
