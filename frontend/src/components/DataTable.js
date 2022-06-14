import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function DataTable() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/orders/")
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Order</TableCell>
            <TableCell align="right">Price (RUB)</TableCell>
            <TableCell align="right">Price (USD)</TableCell>
            <TableCell align="right">Supply date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map(order => (
            <TableRow
              key={order.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell align="right" component="th" scope="row">
                {order.id}
              </TableCell>
              {/* <TableCell align="right">{order.id}</TableCell> */}
              <TableCell align="right">{order.number}</TableCell>
              <TableCell align="right">{order.price_rub}</TableCell>
              <TableCell align="right">{order.price_usd}</TableCell>
              <TableCell align="right">{order.supply_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
