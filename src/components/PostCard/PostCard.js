import "./PostCard.css";

const PostCard = ({ id, title, author, body, deletePost }) => {
	return (
		<div className="post d-flex flex-column align-items-start w-100 mb-5 px-3 py-1" onClick={() => {
			console.log("Clicking Post Card");
		}}>
			<div className="post-header d-flex w-100 align-items-center justify-content-between">
				<span className="post-title">{title}</span>
				<button className="btn btn-light delete-button" onClick={(e) => {deletePost(e, id)}}>Delete</button>
			</div>
			<div className="post-body d-flex w-100 align-items-center justify-content-between">
				<span className="post-body">{body}</span>
				<span className="post-author">Written by {author}</span>
			</div>
		</div>
	);
};

export default PostCard;
