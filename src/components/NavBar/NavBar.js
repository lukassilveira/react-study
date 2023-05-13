import "./NavBar.css";

const NavBarComponent = () => {
	return (
		<nav className="nav-content d-flex position-fixed w-100">
			<a href="/" className="btn btn-primary">Home</a>
			<a href="/create" className="btn btn-primary">New Blog</a>
		</nav>
	);
};

export default NavBarComponent;
