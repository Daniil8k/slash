import IPost from "@/models/IPost";
import { FC } from "react";
import moment from "moment";
import Icon, { IconProps } from "@/components/ui/Icon";
import IconButton from "@/components/ui/IconButton";
import Dropdown from "../ui/Dropdown";
import ShowMoreText from "../ui/ShowMoreText";

interface PostItemProps {
	post: IPost;
	onLike: (postId: number) => void;
	remove?: () => void;
	update?: () => void;
}

interface PostFooterBtnProps extends IconProps {
	text: string | number;
	onClick: () => void;
}

const Post: FC<PostItemProps> = ({ post, onLike, remove, update }) => {
	const EMPTY_IMAGE_SRC =
		"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D";
	const user = post.user;

	return (
		<div className="w-[500px] flex gap-3 bg-card p-4 rounded-md">
			{user.imageURL && (
				<a href={user.link} target="_blank">
					<div
						className="min-w-[3rem] min-h-[3rem] w-12 h-12 bg-center bg-cover rounded-[50%]"
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
							onClick={() => onLike(post.id)}
							name="favorite"
							size="sm"
							color={
								post.isLiked ? "var(--color-danger)" : "var(--color-neutral)"
							}
						/>
						<span className="comment">{post.likesCount}</span>
					</div>
					<div className="flex items-center gap-1">
						<IconButton onClick={() => {}} name="comment" size="sm" />
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
