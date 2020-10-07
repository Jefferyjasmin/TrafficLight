//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Trafficlight } from "./component/Trafficlight";

//render your react application
var previoussColor = "red";
function runningLight() {
	if (previoussColor == "red") {
		previoussColor = "green";
	} else if (previoussColor == "green") {
		previoussColor = "yellow";
	} else if (previoussColor == "yellow") {
		previoussColor = "red";
	}
	ReactDOM.render(
		<Trafficlight color={previoussColor} />,
		document.querySelector("#app")
	);
}

setInterval(runningLight, 1000);
