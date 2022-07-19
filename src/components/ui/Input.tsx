import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	value: string;
	setValue: (value: string) => void;
	type?: string;
	className?: string;
}

const Input: FC<InputProps> = ({
	value,
	setValue,
	type = "text",
	className,
	...props
}) => {
	return (
		<input
			className={[
				"bg-card-light rounded-md border-[1px] border-card-dark w-full h-10 px-2",
				className,
			].join(" ")}
			value={value}
			onChange={(e) => setValue(e.target.value)}
			type={type}
			{...props}
		/>
	);
};

export default Input;
