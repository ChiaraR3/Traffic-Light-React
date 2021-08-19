//import React from "react";
import React, { useState } from "react";
//include images into your bundle
//create your first component

const [color, setColor] = useState(" ");

const Home = () => {
	return (
		<div className="container">
			<div className="LightTop">linea</div>
			<div className="TrafficLight">
				<span className="space">.</span>
				<div
					className="redLight"
					onClick={() => setColor("yellow")}></div>
				<div className="yellowLight">yellow</div>
				<div className="greenLight">green</div>
			</div>
		</div>
	);
};

export default Home;
