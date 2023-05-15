const PostList = ({posts}) => {
	return (
		<div className="post-list">
			{posts.map((post) => (
				<div
					className="post d-flex flex-column align-items-start w-100 mb-5 p-3"
					key={post.id}
				>
					<span className="post-title">{post.title}</span>
					<span className="post-body">{post.title}</span>
				</div>
			))}
		</div>
	);
};

export default PostList;
