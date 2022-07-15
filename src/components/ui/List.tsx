import IPost from "@/models/IPost";
import { FC, ReactNode } from "react";

interface ListItemProps {
	renderItem: (item: any, index: number) => ReactNode;
	data: any[];
}

const Post: FC<ListItemProps> = ({ data, renderItem }) => {
	return (
		<div className="flex flex-col gap-2 overflow-auto">
			{data.map((item, index) => renderItem(item, index))}
		</div>
	);
};

export default Post;
