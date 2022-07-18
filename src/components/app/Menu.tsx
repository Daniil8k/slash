import IUser from "@/models/IUser";
import { useAppSelector } from "@/store";
import { FC } from "react";
import Icon from "../ui/Icon";
import IconButton from "../ui/IconButton";
import Nav from "./Nav";

interface MenuProps {
	className?: string;
	onClose?: () => void;
}

const Menu: FC<MenuProps> = ({ className, onClose }) => {
	const { user } = useAppSelector((state) => state.authSlice);

	return (
		<div
			className={[
				"flex flex-col gap-1 bg-card py-4 rounded-md",
				className,
			].join(" ")}
		>
			<IconButton
				className="absolute top-3 right-3 md:hidden"
				name="close"
				onClick={onClose}
			/>
			<div
				className="min-w-16 min-h-16 w-16 h-16 bg-center bg-cover rounded-[50%] border-card-dark border-[1px] mx-auto"
				style={{
					backgroundImage: `url(${user.imageURL})`,
				}}
			></div>
			<div className="flex items-center gap-1 mx-auto">
				<span className="text-xl">{user.name}</span>
				<Icon name="verified" color="var(--color-primary)" />
			</div>
			<span className="text-center text-neutral font-bold mb-4">
				{user.login}
			</span>
			<span className="text-center text-sm text-neutral px-2 mb-1">
				{user.description}
			</span>
			<hr className="my-4 mx-4 border-card-light" />
			<Nav onItemClick={onClose} />
			<hr className="my-4 mx-4 border-card-light" />
		</div>
	);
};

export default Menu;
