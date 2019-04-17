const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topSightsSchema = new Schema ({

 imageUrl : {
     type: String,
 },
  title: {
      type: String,
  }
})

const TopSights = mongoose.model('TopSights', topSightsSchema);

module.exports = TopSights;
