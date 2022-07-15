import { FC, useState } from "react";

export interface ShowMoreTextProps {
	text: string;
	maxLength?: number;
}

const ShowMoreText: FC<ShowMoreTextProps> = ({ text, maxLength = 100 }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	if (text.length <= maxLength) {
		return <p className="text-xs">{text}</p>;
	}

	return (
		<div>
			<span className="text-xs">{!isExpanded ? text.slice(0, 100) + "..." : text}</span>
			<button
				onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
				className="ml-2 text-primary text-tiny"
			>
				{isExpanded ? "show less" : "show more"}
			</button>
		</div>
	);
};

export default ShowMoreText;
