const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firebaseUid: {
    type: String,
    required: true,
    unique: true
  },
  displayName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  profilePicture: String,
  preferredLanguages: [{
    type: String,
    ref: 'Language'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastActive: {
    type: Date,
    default: Date.now
  },
  settings: {
    dailyGoal: {
      type: Number,
      default: 10
    },
    notifications: {
      type: Boolean,
      default: true
    },
    theme: {
      type: String,
      default: 'light'
    },
    soundEnabled: {
      type: Boolean,
      default: true
    }
  },
  stats: {
    totalScore: {
      type: Number,
      default: 0
    },
    gamesPlayed: {
      type: Number,
      default: 0
    },
    streakDays: {
      type: Number,
      default: 0
    },
    lastStreak: Date,
    totalTimeSpent: {
      type: Number,
      default: 0
    }
  }
});

module.exports = mongoose.model('User', userSchema);
