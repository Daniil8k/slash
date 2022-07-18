import { FC } from "react";
import Icon from "@/components/ui/Icon";
import logo from "@/assets/logo.svg";
import IconButton from "@/components/ui/IconButton";

interface HeaderProps {
	className?: string;
	onMenuClick?: () => void;
}

const Header: FC<HeaderProps> = ({ className, onMenuClick }) => {
	return (
		<header
			className={[
				"flex items-center bg-card py-3 px-4 rounded-md",
				className,
			].join(" ")}
		>
			<IconButton
				onClick={onMenuClick}
				className="mr-4 md:hidden"
				name="menu"
			/>
			<div className="flex items-center gap-2">
				<img width="32px" height="32px" src={logo} alt="" />
				<span className="text-lg italic">Slash</span>
			</div>
			<div className="flex text-baseline gap-1 ml-auto">
				<span className="comment">Exit</span>
				<IconButton name="logout" />
			</div>
		</header>
	);
};

export default Header;
