import IUser from "./IUser";

export default interface IPost {
	id: number;
	title: string;
	commentsCount: number;
	likesCount: number;
	isLiked: boolean;
	date: string;
	imageURL?: string;
	user: IUser;
}
