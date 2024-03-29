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
				"card flex items-center px-4",
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
		</header>
	);
};

export default Header;
