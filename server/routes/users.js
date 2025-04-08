const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { MongoClient, ObjectId } = require('mongodb'); //
const cors = require('cors');

const url = 'mongodb+srv://RaoDemo:RaoDemo@cluster0.s2mlcov.mongodb.net/';
const dbName = 'crudDemo';

// Get user profile
router.get('/:firebaseUid', async (req, res) => {
  try {
    const user = await User.findOne({ firebaseUid: req.params.firebaseUid });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new user
router.post('/', async (req, res) => {
  try {
    const { firebaseUid, displayName, email } = req.body;

    // Check if user already exists
    let user = await User.findOne({ firebaseUid });

    if (!user) {
      // Create new user if not found
      user = new User({ firebaseUid, displayName, email });
      await user.save();
    }

    res.status(201).json(user);  // Send user data back
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// router.post('/', async (req, res) => {
//   const user = new User(req.body);
//   try {
//     const newUser = await user.save();
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// Update user
router.patch('/:firebaseUid', async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { firebaseUid: req.params.firebaseUid },
      { ...req.body, lastActive: Date.now() },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
