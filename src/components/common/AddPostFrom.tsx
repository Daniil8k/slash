import IPost from "@/models/IPost";
import { FC, useState } from "react";
import moment from "moment";
import Icon from "@/components/ui/Icon";
import IconButton from "@/components/ui/IconButton";
import Dropdown from "../ui/Dropdown";
import ShowMoreText from "../ui/ShowMoreText";
import Avatar from "../ui/Avatar";
import { useAppSelector } from "@/store";
import UploadImage from "../ui/UploadImage";
import { postAPI } from "@/services/PostService";

interface PostCardProps {}

const AddPostFrom: FC<PostCardProps> = ({}) => {
	const { user } = useAppSelector((state) => state.authSlice);
	const [createPost, { isLoading: isCreateLoading }] =
		postAPI.useCreatePostMutation();
	const [post, setPost] = useState<IPost>({
		id: Math.random(),
		title: "",
		date: new Date().toISOString(),
		commentsCount: 0,
		likesCount: 0,
		isLiked: false,
		imageURL: "",
		user,
	});

	const setPostProp = (key: keyof IPost, value: string) => {
		setPost((post) => ({ ...post, [key]: value }));
	};

	const handleCreate = async () => {
		if (!post.title && !post.imageURL) {
			return;
		}

		await createPost(post);
		setPost((post) => ({
			...post,
			id: Math.random(),
			title: "",
			imageURL: "",
			date: new Date().toISOString(),
		}));
	};

	return (
		<div className="flex flex-col bg-card p-4 rounded-md">
			<div className="flex items-center gap-2 mb-3">
				<Avatar src={user.imageURL} size="xl" />
				<input
					className="bg-card-light rounded-md border-[1px] border-card-dark w-full h-10 px-2"
					placeholder="Start a post"
					type="text"
					value={post.title}
					onChange={(e) => setPostProp("title", e.target.value)}
				/>
				<IconButton
					name="send"
					isLoading={isCreateLoading}
					onClick={handleCreate}
				/>
			</div>
			<UploadImage
				image={post.imageURL}
				setImage={(imageURL) => setPostProp("imageURL", imageURL)}
			/>
		</div>
	);
};

export default AddPostFrom;
