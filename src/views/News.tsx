import { FC, useState } from "react";
import List from "@/components/ui/List";
import PostCard from "@/components/common/PostCard";
import IPost from "@/models/IPost";
import postsWithUsers from "../../db/postsWithUsers.json";
import { postAPI } from "@/services/PostService";
import AddPostFrom from "@/components/common/AddPostFrom";

interface NewsProps {
	onClick?: () => void;
}

const News: FC<NewsProps> = ({}) => {
	const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(120);

	// const likePost = (postId: number) => {
	// 	let newPosts = [...posts];
	// 	let post = newPosts.find((post) => post.id === postId);
	// 	if (post) {
	// 		post.isLiked = !post.isLiked;
	// 	}

	// 	setPosts(newPosts);
	// };

	const renderPost = (item: IPost) => {
		return (
			<PostCard
				post={item}
				key={item.id}
				onLikeClick={() => {}}
				onCommentClick={() => {}}
			/>
		);
	};

	return (
		<div className="flex-auto flex flex-col gap-2">
			<AddPostFrom />
			{posts && <List data={[...posts].reverse()} renderItem={renderPost} />}
		</div>
	);
};

export default News;
