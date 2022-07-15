import IPost from "@/models/IPost";
import { FC } from "react";
import moment from "moment";
import Icon from "@/components/ui/Icon";
import IconButton from "@/components/ui/IconButton";

interface PostItemProps {
	post: IPost;
	remove?: () => void;
	update?: () => void;
}

const Post: FC<PostItemProps> = ({ post, remove, update }) => {
	const EMPTY_IMAGE_SRC =
		"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D";
	const user = post.user;

	return (
		<div className="w-[500px] flex gap-3 bg-card p-4 rounded-md">
			<img
				className="w-12 h-12 rounded-[50%] object-cover"
				src={user.imageURL ? user.imageURL : EMPTY_IMAGE_SRC}
			/>
			<div className="flex-auto">
				<div className="flex items-center gap-1 -mb-2">
					<span>{user.name}</span>
					<Icon
						name="verified"
						isVisible={user.isApproved}
						color="var(--color-primary)"
					/>
					<span className="comment">{user.login}</span>
					<IconButton onClick={() => {}} className="ml-auto" name="more-horiz" size="md" />
				</div>
				<span className="comment">
					{moment(user.lastVisitDateTime).fromNow()}
				</span>
				<p className="text-sm mb-4">{post.title}</p>
				<div className="flex">
					<div className="flex items-center gap-1">
						<Icon
							name="favorite"
							isVisible={user.isApproved}
							color="var(--color-danger)"
							size="sm"
						/>
						<span className="comment">{post.likesCount}</span>
					</div>
					<div className="comment ml-auto">{post.commentsCount} comments</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
