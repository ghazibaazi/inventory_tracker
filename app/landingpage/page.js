'use client'

import { Box, Typography, Button, Stack } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const router = useRouter()

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="#e3f2fd"
      padding={4}
    >
      <Box
        maxWidth="400px"
        width="100%"
        padding={4}
        bgcolor="white"
        borderRadius={2}
        boxShadow={3}
        textAlign="center"
      >
        <Typography variant="h4" component="h1" marginBottom={3}>
          Welcome to Inventory Tracker
        </Typography>
        <Typography variant="h6" marginBottom={3}>
          Please sign in or sign up to continue
        </Typography>
        <Stack direction="column" spacing={2}>
          <Button
            variant="contained"
            onClick={() => router.push('/signin')}
            sx={{ mb: 2 }}
          >
            Sign In
          </Button>
          <Button
            variant="outlined"
            onClick={() => router.push('/signup')}
          >
            Sign Up
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}
