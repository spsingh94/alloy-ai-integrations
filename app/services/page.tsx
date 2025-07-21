import Head from 'next/head'
import React from 'react'
import { Typography, Container, Grid, Paper } from '@mui/material'

export default function Services() {
    return (
        <>
            <Head>
                <title>Services | Alloy AI Integrations</title>
                <meta name="description" content="Explore our AI integration services." />
            </Head>
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
    )
}