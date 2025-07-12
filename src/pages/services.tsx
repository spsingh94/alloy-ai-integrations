import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Button, Grid, Paper } from '@mui/material';

export default function Services() {
    return (
        <>
            <Head>
                <title>Services | Alloy AI Integrations</title>
                <meta name="description" content="Explore our AI integration services." />
            </Head>
            <AppBar position="sticky" color="primary">
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" component="div">Alloy AI</Typography>
                    </Box>
                    <Button color="inherit" component={Link} href="/">Home</Button>
                    <Button color="inherit" component={Link} href="/about">About</Button>
                    <Button color="inherit" component={Link} href="/services">Services</Button>
                    <Button color="inherit" href="/#contact">Contact</Button>
                </Toolbar>
            </AppBar>
            <Container maxWidth="md" sx={{ py: 5 }}>
                <Typography variant="h2" gutterBottom>Our Services</Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={3} sx={{ p: 3 }}>
                            <Typography variant="h5" gutterBottom>Chatbot & AI Assistant Integration</Typography>
                            <Typography>
                                Deploy GPT-powered chatbots in websites and mobile apps.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={3} sx={{ p: 3 }}>
                            <Typography variant="h5" gutterBottom>Workflow Automation</Typography>
                            <Typography>
                                Automate scheduling, transcription, and repetitive tasks using AI.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={3} sx={{ p: 3 }}>
                            <Typography variant="h5" gutterBottom>Form & Document Summarization</Typography>
                            <Typography>
                                Extract insights from PDFs, intake forms, and documents using AI.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper elevation={3} sx={{ p: 3 }}>
                            <Typography variant="h5" gutterBottom>Custom Integrations</Typography>
                            <Typography>
                                Integrate AI into existing CRMs, ERPs, or legacy software platforms.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}