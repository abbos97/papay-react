import React from 'react';
import '../css/App.css';
import { Box, Container, Typography, Stack, Button } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm">
      <Stack flexDirection={"column"}>
        <Box sx={{my: 4}}>
          <Typography variant="h4" component={"h1"} gutterBottom>
            hello world
          </Typography>
        </Box>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </Container>
  );
}

export default App;
