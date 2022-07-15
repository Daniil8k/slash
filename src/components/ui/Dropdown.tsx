import { FC } from "react";

export interface DropdownProps {
	data: any[];
	onSelect: (item: any) => void;
	className: string;
	children: React.ReactNode;
}

const Dropdown: FC<DropdownProps> = ({
	className,
	children,
	data,
	onSelect,
}) => {
	return (
		<div className={["dropdown", className].join(" ")}>
			{children}
			<div className="dropdown-content">
				{data.map((item) => (
					<button onClick={() => onSelect(item)} key={item}>{item}</button>
				))}
			</div>
		</div>
	);
};

export default Dropdown;
