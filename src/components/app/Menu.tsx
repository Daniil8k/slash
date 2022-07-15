import IUser from "@/models/IUser";
import { FC } from "react";
import Icon from "../ui/Icon";
import Nav from "./Nav";

interface MenuProps {
	className?: string;
}

const Menu: FC<MenuProps> = ({ className }) => {
	const user = {
		id: 18,
		isApproved: true,
		login: "pbernsh@unicef.org",
		name: "Peirce Berns",
		imageURL:
			"https://boredhumans.b-cdn.net/faces2/3.jpg",
		lastVisitDateTime: "2022-06-27T08:50:25Z",
		link: "https://boredhumans.b-cdn.net/faces2/3.jpg",
		description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
	} as IUser;

	return (
		<div
			className={[
				"flex flex-col gap-1 bg-card py-4 rounded-md min-w-[200px]",
				className,
			].join(" ")}
		>
			<div
				className="min-w-16 min-h-16 w-16 h-16 bg-center bg-cover rounded-[50%] border-card-dark border-[1px] mx-auto"
				style={{
					backgroundImage: `url(${user.imageURL})`,
				}}
			></div>
			<div className="flex items-center gap-1 mx-auto">
				<span>{user.name}</span>
				<Icon name="verified" color="var(--color-primary)" />
			</div>
			<span className="text-center comment font-bold">{user.login}</span>
			<span className="text-center comment">{user.description}</span>
			<hr className="my-4 mx-4 border-card-light" />
			<Nav />
			<hr className="my-4 mx-4 border-card-light" />
		</div>
	);
};

export default Menu;
