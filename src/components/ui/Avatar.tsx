import { FC } from "react";
import { ESizes, sizeType } from "@/utils/constants";

export interface AvatarProps {
	className?: string;
	src?: string;
	size?: sizeType;
}

const Avatar: FC<AvatarProps> = ({ className, src, size = "default" }) => {
	return (
		<div
			className="bg-center bg-cover rounded-[50%] border-card-dark border-[1px] bg-gray-200/10"
			style={{
				width: `${ESizes[size]}px`,
				height: `${ESizes[size]}px`,
				backgroundImage: `url(${src})`,
			}}
		></div>
	);
};

export default Avatar;
