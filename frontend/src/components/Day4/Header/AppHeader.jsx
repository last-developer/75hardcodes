import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';

const AppHeader = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <AppBar position="static" style={{ background: 'black', padding: '1px', zIndex: '1000', position: 'absolute', top: '0%', right: '0px', width: '100%' }}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    <Link to="/" >
                        Logo X.
                    </Link>
                </Typography>

                {window.innerWidth > 768 ? (
                    <div>
                        <Button color="inherit">
                            <Link to="/solutions" >
                                Solutions
                            </Link>
                        </Button>
                        <Button color="inherit">
                            <Link to="/about" >
                                About Us
                            </Link>
                        </Button>
                        <Button color="inherit">
                            <Link to="/pricing" >
                                Pricing
                            </Link>
                        </Button>
                        <Button color="inherit">
                            <Link to="/careers" >
                                Careers
                            </Link>
                        </Button>
                        <Button color="inherit">
                            <Link to="/login" style={{ background: 'white', color: 'black', paddingTop: '4px', paddingInline: '10px', borderRadius: '20px', paddingBottom: '2px' }}>
                                Login
                            </Link>
                        </Button>
                    </div>
                ) : (
                    <IconButton
                        color="inherit"
                        onClick={toggleMenu}
                        edge="end"
                        aria-label="menu"

                    >
                        <MenuIcon />
                    </IconButton>
                )}
            </Toolbar>

            {/* Mobile Menu */}
            <Drawer anchor="right" open={isMenuOpen} onClose={toggleMenu} >
                <List style={{ padding: '20px', minWidth: '40vw', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <ListItem style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ListItemIcon>
                            <Link to="/solutions" >
                                Solutions
                            </Link>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <ListItemIcon>
                            <Link to="/about" >
                                About Us
                            </Link>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ListItemIcon>
                            <Link to="/pricing" >
                                Pricing
                            </Link>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <ListItemIcon>
                            <Link to="/careers" >
                                Careers
                            </Link>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ListItemIcon>
                            <Link to="/login" style={{ background: 'black', color: 'white', paddingTop: '4px', paddingInline: '15px', borderRadius: '20px', paddingBottom: '5px' }} >
                                Login
                            </Link>
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Drawer>
        </AppBar>
    );
};

export default AppHeader;