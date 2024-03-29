import { FC, useState } from "react";
import List from "@/components/ui/List";
import PostCard from "@/components/common/PostCard";
import IPost from "@/models/IPost";
import { postAPI } from "@/services/PostService";
import AddPostFrom from "@/components/common/AddPostFrom";

interface NewsProps {
	onClick?: () => void;
}

const News: FC<NewsProps> = ({}) => {
	const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(120);
	const [deletePost, {}] = postAPI.useDeletePostMutation();
	const [updatePost, {}] = postAPI.useUpdatePostMutation();

	const removePost = async (postId: number) => {
		await deletePost(postId);
	};

	const likePost = async (post: IPost) => {
		let newPost = { ...post };

		newPost.isLiked ? newPost.likesCount-- : newPost.likesCount++;
		newPost.isLiked = !newPost.isLiked;

		await updatePost(newPost);
	};

	const renderPost = (item: IPost) => {
		return (
			<PostCard
				post={item}
				key={item.id}
				onLikeClick={likePost.bind(this, item)}
				onCommentClick={() => {}}
				onDeleteClick={removePost}
			/>
		);
	};

	const renderSkeletonPost = () => {
		return <div className="skeleton-card"></div>;
	};

	return (
		<div className="flex-auto flex flex-col gap-2">
			<AddPostFrom />
			{isLoading ? (
				<List data={[1, 2]} renderItem={renderSkeletonPost} />
			) : (
				posts && <List data={[...posts].reverse()} renderItem={renderPost} />
			)}
		</div>
	);
};

export default News;
