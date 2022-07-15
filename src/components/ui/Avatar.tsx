import { FC } from "react";

export interface AvatarProps {
	className?: string;
	imageURL?: string;
}

const Avatar: FC<AvatarProps> = ({ className, imageURL }) => {
	return (
		<div
			className={[
				"min-w-16 min-h-16 w-16 h-16 bg-center bg-cover rounded-[50%] border-card-dark border-[1px] mx-auto",
				className,
			].join(" ")}
			style={{
				backgroundImage: `url(${imageURL})`,
			}}
		></div>
	);
};

export default Avatar;
