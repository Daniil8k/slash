import IPost from "@/models/IPost";
import { FC, useState } from "react";
import IconButton from "@/components/ui/IconButton";
import Avatar from "../ui/Avatar";
import { useAppSelector } from "@/store";
import UploadImage from "../ui/UploadImage";
import { postAPI } from "@/services/PostService";
import Input from "@/components/ui/Input";

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
		<div className="card flex flex-col h-fit">
			<span className="mb-1">Create, like or delete posts with RTK Query</span>
			<div className="flex items-center gap-2 mb-3">
				<Avatar src={user.imageURL} size="xl" />
				<Input
					value={post.title}
					setValue={(value) => setPostProp("title", value)}
					placeholder="Start a post"
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
