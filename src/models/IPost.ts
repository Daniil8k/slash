import IUser from "./IUser";

export default interface IPost {
	id: number;
	title: string;
	commentsCount: number;
	likesCount: number;
	imageURL?: string;
	user: IUser;
}
