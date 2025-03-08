import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Button } from '@mui/material';

function App() {
  const [apiResponse, setApiResponse] = useState('');

  const testApi = async () => {
    try {
      const response = await fetch('/api/test');
      const data = await response.json();
      setApiResponse(data.message);
    } catch (error) {
      setApiResponse('Error connecting to API');
    }
  };

  useEffect(() => {
    testApi();
  }, []);

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tool Website
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Welcome to the Tool Website
          </Typography>
          
          <Typography variant="body1" sx={{ mt: 2, mb: 4 }}>
            API Response: {apiResponse}
          </Typography>

          <Button 
            variant="contained" 
            onClick={testApi}
            sx={{ mt: 2 }}
          >
            Test API Connection
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default App;
