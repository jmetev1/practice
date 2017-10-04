import React from "react";
import axios from "axios";
import MyTable from "./my-table";
import AddItem from "./add-item";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dataLoaded: false,
			products: []
		};
		axios.get("/items").then(res => {
			this.setState({
				products: this.state.products.concat(res.data)
			});
		});
	}
	render() {
		return (
			<div>
				<MyTable products={this.state.products} />;
				<AddItem state={this.state} />;
			</div>
		);
	}
}
