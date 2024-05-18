import React from 'react';
import Link from 'next/link';
import { Container, AppBar, Toolbar, Typography, Button } from '@mui/material';

const AdminLayout = ({ children }) => {
    return (
        <Container>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Admin Dashboard
                    </Typography>
                    <Button color="inherit">
                        <Link href="/admin/products">Products</Link>
                    </Button>
                    <Button color="inherit">
                        <Link href="/admin/categories">Categories</Link>
                    </Button>
                    <Button color="inherit">
                        <Link href="/admin/orders">Orders</Link>
                    </Button>
                    <Button color="inherit">
                        <Link href="/admin/users">Users</Link>
                    </Button>
                </Toolbar>
            </AppBar>
            <main>{children}</main>
        </Container>
    );
};

export default AdminLayout;
