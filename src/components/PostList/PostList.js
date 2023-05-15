import PostCard from "../PostCard/PostCard";

const PostList = ({ posts }) => {
	return (
		<div className="post-list">
			{posts.map((post) => (
				<div
					key={post.id}
				>
					<PostCard 
                        title={post.title} 
                        body={post.body} 
                        author={post.author} 
                    />
				</div>
			))}
		</div>
	);
};

export default PostList;
