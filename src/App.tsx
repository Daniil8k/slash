import { useState } from "react";
import "./styles/main.scss";
import List from "@/components/ui/List";
import Post from "@/components/common/Post";
import IPost from "./models/IPost";

function App() {
	const [count, setCount] = useState(0);
	const posts = [
		{
			id: 1,
			title:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, dolorem.",
			commentsCount: 45,
			likesCount: 241,
			user: {
				id: 1,
				isApproved: true,
				login: "@elonmusk",
				name: "Elon Musk",
				imageURL:
					"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2016%2F11%2F01%2Fgettyimages-506802698-2c327c3b9d8e30de9c7424e55347b9c52cc6208e.jpg&f=1&nofb=1",
				lastVisitDateTime: "2022-07-14T19:00:20.807Z",
			},
			imageURL:
				"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mightysounds.cz%2Fwp-content%2Fuploads%2F2017%2F03%2FPNGPIX-COM-Pepsi-Logo-PNG-Transparent.png&f=1&nofb=1",
		},
	] as IPost[];

	const renderPost = (item: IPost, index: number) => {
		return <Post post={item} key={index} />;
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-[100vh] gap-1">
			<div className="h-[64px]"></div>
			<main className="flex-auto">
				<List data={posts} renderItem={renderPost} />
			</main>
			<footer className="w-full flex items-center justify-end py-1 px-4">
				<a
					className="flex gap-2 text-neutral fill-[var(--color-neutral)] hover:text-primary"
					href="https://github.com/Daniil8k"
					target="_blank"
				>
					<svg
						width="24px"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
					</svg>
					<span>Daniil8k</span>
				</a>
			</footer>
		</div>
	);
}

export default App;
