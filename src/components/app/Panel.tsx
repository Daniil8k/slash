import { FC } from "react";
import Icon from "@/components/ui/Icon";

interface PanelProps {
	className?: string;
}

const Panel: FC<PanelProps> = ({ className }) => {
	return (
		<div
			className={["flex items-center bg-card p-2 rounded-md", className].join(
				" "
			)}
		>
		</div>
	);
};

export default Panel;
