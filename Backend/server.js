const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Hello from SSC backend!');
});

// Serve uploads folder as static (important for profile pictures)
app.use('/uploads', express.static('uploads'));

// Register your routes
app.use('/api/social', require('./routes/socialRoute'));
app.use('/api/auth', require('./routes/authRoutes'));    // <-- includes signup with file upload
app.use('/api/data', require('./routes/dataRoutes'));
app.use('/api/profile', require('./routes/profileRoutes'));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ DB connection error:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
