import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material"
import Link from "next/link"
import { ReactElement } from "react"

const Navbar = (): ReactElement => {
    return (
        <AppBar
            position="sticky"
            color='transparent'
            elevation={0}
        >
            <Toolbar disableGutters>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexGrow: 1
                    }}
                >
                    <img
                        src="/images/aaii-vector-nbg.png" // Path to the logo image
                        alt="Alloy AI Logo"
                        style={{
                            height: '125px', // Adjust logo size as needed
                            marginRight: '10px', // Adds some space between logo and text
                        }}
                    />
                </Box>
                <Button component={Link} href="/">
                    <Typography color='white'>
                        Home
                    </Typography>
                </Button>
                <Button component={Link} href="/about">
                    <Typography color='white'>
                        About
                    </Typography>
                </Button>
                <Button component={Link} href="/services">
                    <Typography color='white'>
                        Services
                    </Typography>
                </Button>
                <Button color="inherit" href="/#contact">
                    <Typography color='white'>
                        Contact
                    </Typography>
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar