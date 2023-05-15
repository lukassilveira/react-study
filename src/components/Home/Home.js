import "./Home.css";
import { useState } from "react";
import PostList from "../PostList/PostList";

const HomeComponent = () => {
	const [posts, setPosts] = useState([
		{ title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
		{ title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
		{
			title: "Web dev top tips",
			body: "lorem ipsum...",
			author: "mario",
			id: 3,
		},
	]);

	return (
		<div className="home w-50 mx-auto">
			<p className="home-title py-3 text-center">Home</p>
			<div className="home-content d-flex flex-column">
				<PostList posts={posts} />
			</div>
		</div>
	);
};

export default HomeComponent;
