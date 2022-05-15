const mongoose = require('mongoose');

const spaceTripSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'user',
    },
    destination: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    returnDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const spaceTrip =
  mongoose.models.spaceTrip || mongoose.model('spaceTrip', spaceTripSchema);

module.exports = spaceTrip;
