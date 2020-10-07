import React from "react";
import PropTypes from "react";

export class Trafficlight extends React.Component {
	// setColor = colorName => {
	// 	this.setState({ color: colorName });
	// };

	render() {
		return (
			<div className="box d-block text-center mx-auto">
				<div
					className={
						this.props.color == "red"
							? "red active   "
							: " red inactive  "
					}
				/>

				<div
					className={
						this.props.color == "yellow"
							? "yellow active   "
							: " yellow inactive "
					}
				/>
				<div
					className={
						this.props.color == "green"
							? "green active  "
							: " green inactive  "
					}
				/>
			</div>
		);
	}
}

Trafficlight.propTypes = {
	color: PropTypes.string
};
