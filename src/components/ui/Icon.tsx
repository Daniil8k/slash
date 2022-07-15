import { FC } from "react";
import { Icon } from "@iconify/react";

enum ESizes {
	"2xl" = 62,
	xl = 48,
	lg = 36,
	md = 24,
	default = 18,
	sm = 16,
}

type sizeType = keyof typeof ESizes;

export interface IconProps {
	name: string;
	size?: sizeType;
	color?: string;
	className?: string;
	isVisible?: boolean;
}

const IconComponent: FC<IconProps> = ({
	name,
	size = "default",
	color = "var(--color-neutral)",
	className,
	isVisible = true,
}) => {
	return (
		<Icon
			icon={`mdi:${name}`}
			className={className}
			style={{
				fontSize: ESizes[size] + "px",
				opacity: isVisible ? 1 : 0,
				color,
			}}
		/>
	);
};

export default IconComponent;
