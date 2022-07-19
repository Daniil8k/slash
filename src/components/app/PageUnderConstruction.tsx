import { FC } from "react";
import Icon from "@/components/ui/Icon";

interface PageUnderConstructionProps {
	name: string;
}

const PageUnderConstruction: FC<PageUnderConstructionProps> = ({
	name = "",
}) => {
	return (
		<div className="flex items-center justify-center card">
			<div className="flex flex-col items-center gap-4">
				<span className="text-xl">{name} page is under construction</span>
				<Icon size="xl" name="build" />
			</div>
		</div>
	);
};

export default PageUnderConstruction;
