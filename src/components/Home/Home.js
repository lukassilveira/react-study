import "./Home.css";
import PostList from "../PostList/PostList";

const HomeComponent = () => {
	return (
		<div className="home w-50 mx-auto">
			<p className="home-title py-3 text-center">Home</p>
			<PostList />
		</div>
	);
};

export default HomeComponent;
