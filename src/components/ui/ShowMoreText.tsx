import { FC, useState } from "react";

export interface ShowMoreTextProps {
	text: string;
	maxLength?: number;
}

const ShowMoreText: FC<ShowMoreTextProps> = ({ text, maxLength = 100 }) => {
	const [isExpanded, setIsExpanded] = useState(false);

	if (text.length <= maxLength) {
		return <p>{text}</p>;
	}

	return (
		<div>
			<span>{!isExpanded ? text.slice(0, 100) + "..." : text}</span>
			<button
				onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
				className="ml-2 text-primary text-xs"
			>
				{isExpanded ? "show less" : "show more"}
			</button>
		</div>
	);
};

export default ShowMoreText;
