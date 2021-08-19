//import React from "react";
import React, { useState } from "react";
//include images into your bundle
//create your first component

// onClick={() => setColor("yellow")}

const Home = () => {
	const [selectedColor, setSelectedColor] = useState("red");
	return (
		<div className="container">
			<div className="LightTop"></div>
			<div className="TrafficLight">
				<div
					onClick={() => setSelectedColor("red")}
					className={
						"redLight" + (selectedColor === "red" ? " glow" : "")
					}>
					<i className="far fa-hand-paper"></i>
				</div>
				<div
					onClick={() => setSelectedColor("yellow")}
					className={
						"yellowLight" +
						(selectedColor === "yellow" ? " glow" : "")
					}>
					<i className="far fa-hand-spock"></i>
				</div>
				<div
					onClick={() => setSelectedColor("green")}
					className={
						"greenLight" +
						(selectedColor === "green" ? " glow" : "")
					}>
					<i className="far fa-thumbs-up"></i>
				</div>
			</div>
		</div>
	);
};

export default Home;
