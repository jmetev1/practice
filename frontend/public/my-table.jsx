import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { formatMoney } from "accounting";

function MyTable(props) {
	let products = props.products;
	if (products.length > 0) {
		let totalPrice = products.reduce((a, c) => {
			return a + c.price;
		}, 0);
		products.push({
			item: "Total",
			price: totalPrice
		});
		products.forEach(p => {
			p.price = formatMoney(p.price);
		});
	}
	return (
		<BootstrapTable
			data={products}
			striped
			hover
			tableStyle={{ border: "#0000FF 2.5px solid" }}
			containerStyle={{ border: "#FFBB73 2.5px solid" }}
			headerStyle={{ border: "red 1px solid" }}
			bodyStyle={{ border: "green 1px solid" }}
		>
			<TableHeaderColumn row="0" isKey dataField="item" headerAlign="center">
				Product Name
			</TableHeaderColumn>
			<TableHeaderColumn
				row="0"
				dataField="price"
				headerAlign="center"
				dataAlign="right"
			>
				Product Price
			</TableHeaderColumn>
		</BootstrapTable>
	);
}
export default MyTable;
