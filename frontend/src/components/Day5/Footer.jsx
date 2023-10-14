import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Container, Grid, Typography, IconButton, Box } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './footer.css'

const Footer = () => {
    return (
        <AppBar position="static" color="primary" className='footer-app-bar' style={{background:'black'}}>
            <Container className='footer-container'>
                <Toolbar >
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={3}>
                            <Box display="flex" alignItems="center">
                                {/* <img src="/logo.png" alt="Logo" style={{ width: '100px' }} /> */}
                                <Typography variant="h6"><Link to="/">75hardcodes</Link></Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Typography variant="h6">Platform</Typography>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/product">Product</Link>
                                </li>
                                <li>
                                    <Link to="/pricing">Pricing</Link>
                                </li>
                                <li>
                                    <Link to="/docs">Docs</Link>
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Typography variant="h6">Company</Typography>
                            <ul>
                                <li>
                                    <Link to="/help">Help</Link>
                                </li>
                                <li>
                                    <Link to="/careers">Careers</Link>
                                </li>
                                <li>
                                    <Link to="/partners">Partners</Link>
                                </li>
                                <li>
                                    <Link to="/privacy">Privacy Policy</Link>
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Typography variant="h6">Connect With Us</Typography>
                            <IconButton href="https://twitter.com/imlastdeveloper" style={{ color: 'white' }} target='_blank'>
                                <TwitterIcon />
                            </IconButton>
                            <IconButton href="https://www.linkedin.com/in/lastdeveloper/" style={{ color: 'white' }} target='_blank'>
                                <LinkedInIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Footer;
