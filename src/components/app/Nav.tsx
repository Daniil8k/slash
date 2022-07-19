import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../ui/Icon";

interface INavItem {
	path: string;
	label: string;
	icon: string;
}

const NAV_ITEMS = [
	{
		path: "/",
		label: "News",
		icon: "newspaper",
	},
	{
		path: "/messages",
		label: "Messages",
		icon: "message",
	},
	{
		path: "/friends",
		label: "Friends",
		icon: "people",
	},
	{
		path: "/events",
		label: "Events",
		icon: "star",
	},
	{
		path: "/settings",
		label: "Settings",
		icon: "settings",
	},
] as INavItem[];

interface NavProps {
	className?: string;
	onItemClick?: () => void;
}

const Nav: FC<NavProps> = ({ className, onItemClick }) => {
	const location = useLocation();

	return (
		<nav className={["flex flex-col gap-1", className].join(" ")}>
			{NAV_ITEMS.map((item) => {
				let isCurrentPath = location.pathname === item.path;

				return (
					<Link
						className={[
							"relative flex items-center my-1",
							isCurrentPath && "bg-[#1f2f43]",
						].join(" ")}
						to={item.path}
						key={item.path}
						onClick={onItemClick}
					>
						<div
							className="w-[2px] h-full mr-4"
							style={{
								opacity: isCurrentPath ? 1 : 0,
								backgroundColor: "var(--color-primary-light)",
							}}
						/>
						<div
							className={[
								"flex items-center gap-2 mr-4 py-0.5",
								isCurrentPath && "text-primary-light",
							].join(" ")}
						>
							<Icon
								name={item.icon}
								color={
									isCurrentPath
										? "var(--color-primary-light)"
										: "var(--color-neutral)"
								}
							/>
							<span className="text-lg">{item.label}</span>
						</div>
					</Link>
				);
			})}
		</nav>
	);
};

export default Nav;
