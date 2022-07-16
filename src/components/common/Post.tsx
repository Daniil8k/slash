import IPost from "@/models/IPost";
import { FC } from "react";
import moment from "moment";
import Icon, { IconProps } from "@/components/ui/Icon";
import IconButton from "@/components/ui/IconButton";
import Dropdown from "../ui/Dropdown";
import ShowMoreText from "../ui/ShowMoreText";
import Avatar from "../ui/Avatar";

interface PostItemProps {
	post: IPost;
	onLikeClick: (postId: number) => void;
	onCommentClick: (postId: number) => void;
	remove?: () => void;
	update?: () => void;
}

const Post: FC<PostItemProps> = ({
	post,
	onLikeClick,
	onCommentClick,
	remove,
	update,
}) => {
	const user = post.user;

	const PostHeader: FC = () => {
		return (
			<div className="flex items-center gap-1 mb-2">
				<a href={user.link} target="_blank">
					<Avatar src={user.imageURL} size="xl" />
				</a>
				<div className="flex items-center gap-1 flex-wrap">
					<div className="flex items-center gap-1">
						<span>{user.name}</span>
						{user.isApproved && (
							<Icon name="verified" color="var(--color-primary)" />
						)}
					</div>
					<span className="comment">{user.login}</span>
				</div>
				<Dropdown
					data={["Hide such content", "Block user"]}
					onSelect={(item) => console.log(item)}
					className="ml-auto"
				>
					<IconButton name="more-horiz" />
				</Dropdown>
			</div>
		);
	};

	const PostFooter: FC = () => {
		return (
			<div className="flex gap-2 mt-6">
				<div className="flex items-center gap-1">
					<IconButton
						onClick={() => onLikeClick(post.id)}
						name="favorite"
						size="sm"
						color={
							post.isLiked ? "var(--color-danger)" : "var(--color-neutral)"
						}
					/>
					<span className="comment">{post.likesCount}</span>
				</div>
				<div className="flex items-center gap-1">
					<IconButton
						onClick={() => onCommentClick(post.id)}
						name="comment"
						size="sm"
					/>
					<span className="comment">{post.commentsCount}</span>
				</div>
				<span className="comment ml-auto">
					{moment(user.lastVisitDateTime).fromNow()}
				</span>
			</div>
		);
	};

	return (
		<div className="flex flex-col bg-card p-4 rounded-md">
			<PostHeader />
			<ShowMoreText className="px-1" text={post.title} />
			{post.imageURL && (
				<div
					className="w-full h-64 bg-center bg-cover border-[1px] border-neutral rounded-md mt-4"
					style={{ backgroundImage: `url(${post.imageURL})` }}
				></div>
			)}
			<PostFooter />
		</div>
	);
};

export default Post;
