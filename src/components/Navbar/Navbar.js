import React, { useEffect, useState, useRef } from "react";
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    CssBaseline,
    Button,
} from "@mui/material";

const navItems = ["App", "Home", "Test"];
function Navbar({setNavbarHeight}) {
    
    const ref = useRef(null);

    useEffect(() => {
        setNavbarHeight(ref.current.clientHeight);
        console.log(ref.current.clientHeight)
    },[setNavbarHeight]);
    return (
        <Box sx={{ display: "flex" }} >
            <CssBaseline />
            <AppBar component="nav" ref = {ref}>
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
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: "#fff" }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;
