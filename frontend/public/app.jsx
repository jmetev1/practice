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
		axios.get("/items").then(res => this.addData(res.data));
		this.addData = this.addData.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	addData(prods) {
		this.setState({
			products: prods
		});
	}
	handleSubmit(name, price, cb) {
		axios
			.post("/items", {
				item: name,
				price: price
			})
			.then(res => {
				this.addData(res.data);
				cb();
			});
	}
	render() {
		return (
			<div>
				<MyTable products={this.state.products} />
				<AddItem state={this.state} handleSubmit={this.handleSubmit} />
			</div>
		);
	}
}
