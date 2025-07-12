import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Button, TextField, Alert } from '@mui/material';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Alloy AI Integrations</title>
        <meta name="description" content="Fusing intelligence into your systems" />
        <link rel="icon" href="/favicon.ico" />
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
        <Typography variant="h2" gutterBottom>Welcome to Alloy AI Integrations</Typography>
        <Typography variant="body1" paragraph>
          Alloy AI Integrations helps modern businesses plug AI into their existing tools and workflows —
          without needing to rebuild their software from scratch. We specialize in rapid deployment,
          practical integrations, and domain-specific solutions in fields like construction, healthcare,
          logistics, and SaaS.
        </Typography>
        <Box id="contact" sx={{ mt: 10 }}>
          <Typography variant="h4" gutterBottom>Contact</Typography>
          <Typography variant="body1" paragraph>
            Email us directly at <a href="mailto:hello@alloyintegrations.ai">hello@alloyintegrations.ai</a>
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Typography variant="h6">Subscribe for Updates</Typography>
            <TextField
              label="Your Email"
              type="email"
              fullWidth
              required
              variant="outlined"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary">Submit</Button>
            {submitted && <Alert severity="success" sx={{ mt: 2 }}>Thank you! We will be in touch soon.</Alert>}
          </Box>
        </Box>
      </Container>
    </>
  )
}