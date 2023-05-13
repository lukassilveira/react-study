import "./Home.css";
import { useState } from "react";

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
				{posts.map((post) => (
					<div className="post d-flex flex-column align-items-start w-100 mb-5 p-3" key={post.id}>
						<span className="post-title">{post.title}</span>
						<span className="post-body">{post.title}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default HomeComponent;
