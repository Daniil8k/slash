import { FC, useState } from "react";
import List from "@/components/ui/List";
import Post from "@/components/common/Post";
import IPost from "@/models/IPost";
import postsWithUsers from "../../db/postsWithUsers.json";

interface NewsProps {
	onClick?: () => void;
}

const News: FC<NewsProps> = ({}) => {
	const [posts, setPosts] = useState<IPost[]>(postsWithUsers);

	const likePost = (postId: number) => {
		let newPosts = [...posts];
		let post = newPosts.find((post) => post.id === postId);
		if (post) {
			post.isLiked = !post.isLiked;
		}

		setPosts(newPosts);
	};

	const renderPost = (item: IPost) => {
		return (
			<Post
				post={item}
				key={item.id}
				onLikeClicked={likePost}
				onCommentClicked={() => {}}
			/>
		);
	};

	return (
		<div className="flex-auto flex justify-center">
			<List data={posts} renderItem={renderPost} />
		</div>
	);
};

export default News;
