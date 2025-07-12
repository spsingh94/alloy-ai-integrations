import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Button } from '@mui/material';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Alloy AI Integrations</title>
        <meta name="description" content="Learn more about Alloy AI Integrations and our mission." />
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
        <Typography variant="h2" gutterBottom>About Us</Typography>
        <Typography variant="body1" paragraph>
          Alloy AI Integrations was founded by a passionate software developer who wanted to make artificial intelligence accessible to real businesses. With hands-on experience at companies like SD Wheel Corp and WTS Paradigm, we’ve seen firsthand how legacy systems, limited technical bandwidth, or unclear AI strategy can hold companies back.
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to help companies bridge that gap. We specialize in integrating ready-made AI tools — like GPT APIs, Whisper, and Claude — into everyday workflows, so your team can focus on what matters.
        </Typography>
        <Typography variant="body1">
          We believe in building strong foundations, communicating clearly, and delivering value fast. Alloy AI Integrations is about adding intelligence, not complexity.
        </Typography>
      </Container>
    </>
  );
}