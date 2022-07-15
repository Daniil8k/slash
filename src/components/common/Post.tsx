import IPost from "@/models/IPost";
import { FC } from "react";
import moment from "moment";
import Icon, { IconProps } from "@/components/ui/Icon";
import IconButton from "@/components/ui/IconButton";
import Dropdown from "../ui/Dropdown";
import ShowMoreText from "../ui/ShowMoreText";

interface PostItemProps {
	post: IPost;
	onLikeClicked: (postId: number) => void;
	onCommentClicked: (postId: number) => void;
	remove?: () => void;
	update?: () => void;
}

const Post: FC<PostItemProps> = ({
	post,
	onLikeClicked,
	onCommentClicked,
	remove,
	update,
}) => {
	const user = post.user;

	return (
		<div className="w-[500px] flex gap-3 bg-card p-4 rounded-md">
			{user.imageURL && (
				<a
					className="min-w-[3rem] min-h-[3rem] w-12 h-12"
					href={user.link}
					target="_blank"
				>
					<div
						className="w-12 h-12 bg-center bg-cover rounded-[50%] border-card-dark border-[1px]"
						style={{ backgroundImage: `url(${user.imageURL})` }}
					></div>
				</a>
			)}
			<div className="flex-auto">
				<div className="flex items-baseline gap-1 mb-2">
					<div className="flex items-center gap-1">
						<span>{user.name}</span>
						{user.isApproved && (
							<Icon name="verified" color="var(--color-primary)" />
						)}
					</div>
					<span className="comment">{user.login}</span>
					<Dropdown
						data={["Hide such content", "Block user"]}
						onSelect={(item) => console.log(item)}
						className="ml-auto"
					>
						<IconButton name="more-horiz" />
					</Dropdown>
				</div>
				<ShowMoreText text={post.title} />
				{post.imageURL && (
					<div
						className="w-full h-64 bg-center bg-cover border-[1px] border-neutral rounded-md mt-4"
						style={{ backgroundImage: `url(${post.imageURL})` }}
					></div>
				)}
				<div className="flex gap-2 mt-6">
					<div className="flex items-center gap-1">
						<IconButton
							onClick={() => onLikeClicked(post.id)}
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
							onClick={() => onCommentClicked(post.id)}
							name="comment"
							size="sm"
						/>
						<span className="comment">{post.commentsCount}</span>
					</div>
					<span className="comment ml-auto">
						{moment(user.lastVisitDateTime).fromNow()}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Post;
