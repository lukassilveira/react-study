import "./Home.css";
import { useState } from "react";

const HomeComponent = () => {
    const [name, setName] = useState("Mario");
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName("Yoshi");
        setAge(10);
    };
	return (
		<div className="home">
			<p className="home-title">Home</p>
			<p>{name} is {age} years old.</p>
		
			<button onClick={handleClick}>Button</button>
		</div>
	);
};

export default HomeComponent;
