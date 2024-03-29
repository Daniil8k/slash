export default interface IUser {
	id: number;
	name: string;
	login: string;
	isApproved: boolean;
	lastVisitDateTime: string;
	link: string;
	description?: string;
	imageURL?: string;
}
