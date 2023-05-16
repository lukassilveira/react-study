import { useState } from "react";
import PostCard from "../PostCard/PostCard";

const deletePost = (e, id) => {
	console.log(id);
	e.stopPropagation();
};

const PostList = () => {
	const [posts, setPosts] = useState([
		{ title: "My new website", body: "Lorem ipsum...", author: "mario", id: 1 },
		{ title: "Welcome party!", body: "Lorem ipsum...", author: "yoshi", id: 2 },
		{
			title: "Web dev top tips",
			body: "Lorem ipsum...",
			author: "mario",
			id: 3,
		},
	]);
	return (
		<div className="post-list">
			{posts.map((post) => (
				<div key={post.id}>
					<PostCard
						title={post.title}
						body={post.body}
						author={post.author}
						id={post.id}
						deletePost={deletePost}
					/>
				</div>
			))}
		</div>
	);
};

export default PostList;
