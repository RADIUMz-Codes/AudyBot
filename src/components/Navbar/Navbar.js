import React from "react";
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    CssBaseline,
    Button
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
    

    
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", sm: "block" },
                        }}
                    >
                        KPMG
                    </Typography>
                    <Box
                        sx={{ display: { xs: "none", sm: "block" } }}
                    >
                        <a href="/">Home</a>
                        <a href="/services">Services</a>
                        <a href="/team">Team</a>
                        <a href="/demo">Demo</a>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;
