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
		<BootstrapTable data={products} striped hover>
			<TableHeaderColumn isKey dataField="item">
				Product Name
			</TableHeaderColumn>
			<TableHeaderColumn dataField="price">
				Product Price
			</TableHeaderColumn>
		</BootstrapTable>
	);
}
export default MyTable;
