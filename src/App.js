import "./App.css";
import HomeComponent from "./components/Home/Home";
import NavBarComponent from "./components/NavBar/NavBar";

function App() {
	return (
		<div className="App">
			<NavBarComponent>/</NavBarComponent>
			<div className="content">
				<HomeComponent></HomeComponent>
			</div>
		</div>
	);
}

export default App;
