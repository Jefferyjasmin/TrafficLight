import React from "react";

export class Trafficlight extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			color: "gray"
		};
	}
	setColor = colorName => {
		this.setState({ color: colorName });
	};

	render() {
		return (
			<div className="box d-block text-center mx-auto">
				<div
					className={
						this.state.color == "red"
							? "red active   "
							: " red inactive  "
					}
					onClick={() => {
						this.setColor("red");
					}}
				/>
				<div
					className={
						this.state.color == "yellow"
							? "yellow active   "
							: " yellow inactive "
					}
					onClick={() => {
						this.setColor("yellow");
					}}
				/>
				<div
					className={
						this.state.color == "green"
							? "green active  "
							: " green inactive  "
					}
					onClick={() => {
						this.setColor("green");
					}}
				/>
			</div>
		);
	}
}

// "red  mx-auto {}"
