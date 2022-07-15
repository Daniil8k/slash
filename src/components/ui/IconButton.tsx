import { FC } from "react";
import Icon, { IconProps } from "./Icon";

interface IconButtonProps extends IconProps {
	onClick: () => void;
}

const IconButton: FC<IconButtonProps> = ({
	onClick,
	className = "",
	...iconProps
}) => {
	return (
		<button
			className={[
				"cursor-pointer border-[1px] rounded-sm border-transparent hover:border-neutral",
				className,
			].join(" ")}
			onClick={onClick}
		>
			<Icon {...iconProps} />
		</button>
	);
};

export default IconButton;
