import "./PostCard.css";

const PostCard = ({ title, author, body }) => {
	return (
		<div className="post d-flex flex-column align-items-start w-100 mb-5 p-3">
			<div className="post-header">
				<span className="post-title">{title}</span>
			</div>
			<div className="post-body">
				<span className="post-title">{body}</span>
				<span className="post-author">Written by {author}</span>
			</div>
		</div>
	);
};

export default PostCard;
