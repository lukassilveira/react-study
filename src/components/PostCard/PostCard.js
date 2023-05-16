import "./PostCard.css";

const PostCard = ({ title, author, body }) => {
	return (
		<div className="post d-flex flex-column align-items-start w-100 mb-5 p-3">
			<div className="post-header d-flex w-100 align-items-center justify-content-between">
				<span className="post-title">{title}</span>
				<button className="btn btn-light delete-button">Delete</button>
			</div>
			<div className="post-body">
				<span className="post-title">{body}</span>
				<span className="post-author">Written by {author}</span>
			</div>
		</div>
	);
};

export default PostCard;
