import { FC, useState } from "react";

export interface UploadImageProps {
	image?: string;
	setImage?: (url: string) => void;
}

const UploadImage: FC<UploadImageProps> = ({ image, setImage }) => {
	const onImageChange = (event: any) => {
		if (event.target.files && event.target.files[0]) {
			let img = event.target.files[0];
			const FR = new FileReader();

			FR.addEventListener("load", function (evt) {
				evt?.target && setImage && setImage("" + evt.target.result);
			});

			FR.readAsDataURL(img);
		}
	};

	return (
		<div>
			{image ? (
				<label
					htmlFor="upload-file"
					className="block w-full h-64 bg-cover bg-center pointer"
					style={{ backgroundImage: `url(${image})` }}
				></label>
			) : (
				<label
					htmlFor="upload-file"
					className="flex items-center justify-center w-full h-12 border-[1px] border-dashed rounded-md cursor-pointer"
				>
					<span>Choose the image</span>
				</label>
			)}
			<input
				id="upload-file"
				className="hidden"
				type="file"
				onChange={onImageChange}
			/>
		</div>
	);
};

export default UploadImage;
