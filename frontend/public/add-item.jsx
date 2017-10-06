import React from "react";
import NumberFormat from "react-number-format";

export default class AddItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			itemName: "",
			itemPrice: "",
			warning: ""
		};
		this.validate = this.validate.bind(this);
	}
	validate(name) {
		if (this.state.itemName.length > 0) {
			if (this.state.itemPrice > 0) {
				this.props.handleSubmit(
					this.state.itemName,
					this.state.itemPrice,
					() => {
						this.setState({
							warning: `Add Successful!`
						});
					}
				);
				this.setState({
					itemName: "",
					itemPrice: ""
				});
			} else {
				this.setState({
					warning: "Please Enter An Amount Greater Than 0"
				});
			}
		} else {
			this.setState({
				warning: "Please Enter A Product Name"
			});
		}
	}
	render() {
		return (
			<div>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Item Name</label>
					<input
						className="form-control"
						id="exampleInputEmail1"
						placeholder="Item Name"
						type="text"
						value={this.state.itemName}
						onChange={event => this.setState({ itemName: event.target.value })}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Item Price</label>
					<NumberFormat
						value={this.state.itemPrice}
						thousandSeparator
						decimalPrecision={2}
						placeholder="43.21"
						allowNegative={false}
						prefix={"$"}
						onChange={(e, values) =>
							this.setState({ itemPrice: Number(values.value) })}
						className="form-control"
					/>
				</div>
				<button
					onClick={this.validate}
					type="submit"
					className="btn btn-default"
				>
					Submit
				</button>
				{this.state.warning}
			</div>
		);
	}
}
