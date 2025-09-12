import { AppBar, Toolbar, Box, Typography, Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react'

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
                    <Image
                        src="/images/aaii-vector-nbg.png"
                        alt="Alloy AI Logo"
                        width={150}
                        height={100}
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