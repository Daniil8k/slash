import { FC } from "react";
import Icon from "@/components/ui/Icon";

interface FooterProps {
	className?: string;
}

const Footer: FC<FooterProps> = ({ className }) => {
	return (
		<footer
			className={["flex items-center justify-end px-4", className].join(
				" "
			)}
		>
			<a
				className="flex items-center gap-1 text-neutral hover:underline"
				href="https://github.com/Daniil8k"
				target="_blank"
			>
				<Icon name="github" />
				<span className="text-xs">Daniil8k &copy;</span>
			</a>
		</footer>
	);
};

export default Footer;
