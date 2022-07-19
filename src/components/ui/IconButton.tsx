import { FC } from "react";
import Icon, { IconProps } from "./Icon";

interface IconButtonProps extends IconProps {
	isLoading?: boolean;
	onClick?: () => void;
}

const IconButton: FC<IconButtonProps> = ({
	onClick,
	isLoading = false,
	name,
	className = "",
	...iconProps
}) => {
	return (
		<button
			className={["cursor-pointer", isLoading && 'rotate-anim cursor-default', className].join(" ")}
			onClick={onClick}
			disabled={isLoading}
		>
			{<Icon name={isLoading ? "refresh" : name} {...iconProps} />}
		</button>
	);
};

export default IconButton;
