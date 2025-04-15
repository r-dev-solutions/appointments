require('dotenv').config();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

async function test() {
  try {
    // Test MongoDB connection
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connection successful!');

    // Test JWT
    const testUser = { id: 'test123', role: 'admin' };
    const token = jwt.sign(testUser, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log('✅ JWT generated successfully:', token);

    // Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('✅ JWT verified successfully:', decoded);

    process.exit(0);
  } catch (error) {
    console.error('❌ Test failed:', error);
    process.exit(1);
  }
}

test();