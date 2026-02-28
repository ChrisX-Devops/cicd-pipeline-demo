const express = require('express');

const app = express();
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Main endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'CI/CD Pipeline Demo',
    version: '1.0.0',
    endpoints: {
      health: '/health'
    }
  });
});

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log('🚀 Server running on port ' + PORT);
  });
}

module.exports = app;
