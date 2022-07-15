export default interface IUser {
	id: number;
	name: string;
	login: string;
	isApproved: boolean;
	imageURL?: string;
	lastVisitDateTime: string;
}
