import { FC, useState } from "react";

export interface ShowMoreTextProps {
	text: string;
	maxLength?: number;
	className?: string;
}

const ShowMoreText: FC<ShowMoreTextProps> = ({
	className,
	text,
	maxLength = 100,
}) => {
	const [isExpanded, setIsExpanded] = useState(false);

	if (text.length <= maxLength) {
		return <p className={className}>{text}</p>;
	}

	return (
		<div className={className}>
			<span>
				{!isExpanded ? text.slice(0, 100) + "..." : text}
			</span>
			<button
				onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
				className="ml-2 text-primary text-sm"
			>
				{isExpanded ? "less" : "more"}
			</button>
		</div>
	);
};

export default ShowMoreText;
