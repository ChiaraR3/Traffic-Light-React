import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="TrafficLight">
			<div className ="redLight"></div>
			<div className = "yellowLight"></div>
			<div className = "greenLight"></div>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			
		</div>
	);
};

export default Home;
