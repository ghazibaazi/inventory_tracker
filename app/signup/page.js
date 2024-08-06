'use client'

import { useState } from 'react'
import { Box, Typography, TextField, Button, Stack } from '@mui/material'
import { useRouter } from 'next/navigation'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from '@/firebase'

const auth = getAuth(app)

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      router.push('/home')
    } catch (err) {
      setError(err.message)
    }
  }

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
      >
        <Typography variant="h4" component="h1" marginBottom={3}>
          Sign Up
        </Typography>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />
        {error && (
          <Typography color="error" marginBottom={2}>
            {error}
          </Typography>
        )}
        <Stack direction="row" spacing={2} marginTop={2}>
          <Button variant="contained" onClick={handleSubmit}>
            Sign Up
          </Button>
          <Button
            variant="outlined"
            onClick={() => router.push('/signin')}
          >
            Already have an account? Sign In
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}
