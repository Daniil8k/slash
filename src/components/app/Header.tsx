import { FC } from "react";
import Icon from "@/components/ui/Icon";
import logo from "@/assets/logo.svg";
import IconButton from "@/components/ui/IconButton";

interface HeaderProps {
	className?: string;
}

const Header: FC<HeaderProps> = ({ className }) => {
	return (
		<header
			className={[
				"flex items-center bg-card py-2 px-4 rounded-md",
				className,
			].join(" ")}
		>
			<div className="flex gap-2">
				<img width="24px" height="24px" src={logo} alt="" />
				<span className="italic">Slash</span>
			</div>
			<div className="flex text-baseline gap-1 ml-auto">
				<span className="comment">Exit</span>
				<IconButton name="logout" />
			</div>
		</header>
	);
};

export default Header;
