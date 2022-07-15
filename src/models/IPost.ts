import IUser from "./IUser";

export default interface IPost {
	id: number;
	title: string;
	commentsCount: number;
	likesCount: number;
	isLiked: boolean;
	imageURL?: string;
	user: IUser;
}
