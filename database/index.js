const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ikeafec');

const db = mongoose.connection;

db.on('error', console.error.bind(console, `connection error: `));
db.once('open', () => console.log(`we're connected to  l e w d   b e a t s`));


let ikeaSchema = new mongoose.Schema({
  itemimage: String,
  itemname: { type: String, unique: true },
  typesize: String,
  price: Number,
  description: String,
  rating: Number
});

let Item = mongoose.model('Item', ikeaSchema);

module.exports = {
  getAll: (req, callback) => {
    Item.find({})
    .exec((err, results) => {
      if (err) {
        console.log(`error in database index.getAll: `, err)
        callback(err)
      } else {
        console.log(`you hit database index.getAll`)
        callback(null, results)
      }
    });
  },

  save: (req, callback) => {

    // req.body = JSON.parse(req.body)
    console.log(req.body)

    // req.body.forEach((item, index) => {
      Item.create({
        itemimage: req.body.itemimage,
        itemname: req.body.itemname,
        typesize: req.body.typesize,
        price: req.body.price,
        description: req.body.description,
        rating: req.body.rating
      }, (err, results) => {
        if (err) {
          console.log(`you're in Item.create if-statement`)
          callback(err)
        } else {
          console.log(`you're in Item.create else-statement`)
          callback(null, results)
        }
      })
    // })
  }

};