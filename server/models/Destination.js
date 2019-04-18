const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  location: {
    type: String,
    required: true
  },
  hotel: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  topSights: [{
    type: String,
    

  }]
});

const Destination = mongoose.model('Destination', destinationSchema);

module.exports = Destination;
