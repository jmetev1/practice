import React from "react";
import axios from "axios";

export default class AddItem extends React.Component {
	constructor(props) {
		super(props);
		console.log(props.state)
		// axios.post("/items").then(res => {
		// 	this.setState({
		// 		products: this.state.products.concat(res.data)
		// 	});
		// });
	}
	render() {
		return <div>{this.props.state.dataLoaded}</div>;
	}
}
