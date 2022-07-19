import IPost from "@/models/IPost";
import { FC } from "react";
import moment from "moment";
import Icon from "@/components/ui/Icon";
import IconButton from "@/components/ui/IconButton";
import Dropdown from "../ui/Dropdown";
import ShowMoreText from "../ui/ShowMoreText";
import Avatar from "../ui/Avatar";

interface PostCardProps {
	post: IPost;
	onLikeClick: (postId: number) => void;
	onCommentClick: (postId: number) => void;
	onDeleteClick: (postId: number) => void;
}

const PostCard: FC<PostCardProps> = ({
	post,
	onLikeClick,
	onCommentClick,
	onDeleteClick,
}) => {
	const user = post.user;

	const deletePost = () => {
		onDeleteClick(post.id);
	};

	const PostCardHeader: FC = () => {
		return (
			<div className="flex items-center gap-1 mb-2">
				<a href={user.link} target="_blank">
					<Avatar src={user.imageURL} size="xl" />
				</a>
				<div className="flex items-center gap-1 flex-wrap">
					<div className="flex items-center gap-1">
						<span className="text-xl">{user.name}</span>
						{user.isApproved && (
							<Icon name="verified" color="var(--color-primary)" />
						)}
					</div>
					<span className="comment">{user.login}</span>
				</div>
				<Dropdown
					data={["Delete post"]}
					onSelect={deletePost}
					className="ml-auto"
				>
					<IconButton name="more-horiz" />
				</Dropdown>
			</div>
		);
	};

	const PostCardFooter: FC = () => {
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
					<Icon
						name="comment"
						size="sm"
					/>
					<span className="comment">{post.commentsCount}</span>
				</div>
				<span className="comment ml-auto">{moment(post.date).fromNow()}</span>
			</div>
		);
	};

	return (
		<div className="card flex flex-col">
			<PostCardHeader />
			<ShowMoreText className="px-1" text={post.title} />
			{post.imageURL && (
				<div
					className="w-full h-64 bg-center bg-cover border-[1px] border-neutral rounded-md mt-4"
					style={{ backgroundImage: `url(${post.imageURL})` }}
				></div>
			)}
			<PostCardFooter />
		</div>
	);
};

export default PostCard;
