import { FC } from "react";
import Icon from "@/components/ui/Icon";
import react from "@/assets/react.svg";

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
			<img width="18px" height="18px" src={react} alt="" />
		</div>
	);
};

export default Panel;
