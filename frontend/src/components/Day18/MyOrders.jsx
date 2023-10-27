import React, { useEffect, useState } from 'react';
import { Container, Paper, Typography, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

const MyOrders = () => {
    const [orders, setOrders] = useState([
        {
            id: 1,
            date: '2023-01-15',
            items: [
                { id: 1, name: 'Product A', quantity: 2 },
                { id: 2, name: 'Product B', quantity: 1 },
            ],
            totalAmount: 59.99,
            status: 'Delivered',
        },
        {
            id: 2,
            date: '2023-01-10',
            items: [
                { id: 3, name: 'Product C', quantity: 3 },
                { id: 4, name: 'Product D', quantity: 2 },
            ],
            totalAmount: 119.95,
            status: 'Shipped',
        },
        {
            id: 3,
            date: '2023-01-01',
            items: [
                { id: 5, name: 'Product E', quantity: 3 },
                { id: 6, name: 'Product F', quantity: 2 },
            ],
            totalAmount: 100.55,
            status: 'Delivered',
        },
        {
            id: 4,
            date: '2022-12-31',
            items: [
                { id: 7, name: 'Product G', quantity: 5 },
                { id: 8, name: 'Product H', quantity: 2 },
            ],
            totalAmount: 299.95,
            status: 'Shipped',
        },
        {
            id: 5,
            date: '2022-12-30',
            items: [
                { id: 9, name: 'Product I', quantity: 2 },
                { id: 10, name: 'Product J', quantity: 2 },
            ],
            totalAmount: 110.90,
            status: 'Delivered',
        },
    ]);

    return (
        <section style={{ minHeight: '100vh' }}>
            <Typography variant="h4" align="center" gutterBottom>
                My Orders
            </Typography>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Order ID</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Items</TableCell>
                            <TableCell>Total Amount</TableCell>
                            <TableCell>Status</TableCell> {/* New Status Field */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell>{order.id}</TableCell>
                                <TableCell>{order.date}</TableCell>
                                <TableCell>
                                    <ul>
                                        {order.items.map((item) => (
                                            <li key={item.id}>
                                                {item.name} x{item.quantity}
                                            </li>
                                        ))}
                                    </ul>
                                </TableCell>
                                <TableCell>${order.totalAmount.toFixed(2)}</TableCell>
                                <TableCell>{order.status}</TableCell> {/* Display the Status */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </section>
    );
};

export default MyOrders;
