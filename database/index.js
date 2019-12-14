const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/ikeaproducts", { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, `connection error: `));
db.once("open", () => console.log(`we're connected to  l e w d   b e a t s`));

let ikeaSchema = new mongoose.Schema({
  itemimage: String,
  itemname: { type: String, unique: true },
  typesize: String,
  price: Number,
  description: String,
  rating: Number,
  numberRatings: Number
});

let Product = mongoose.model("Product", ikeaSchema);

const getAll = (req, callback) => {
  Product.find({}).exec((err, results) => {
    if (err) {
      console.log(`error in database index.getAll: `, err);
      callback(err);
    } else {
      console.log(`you hit database index.getAll`);
      callback(null, results);
    }
  });
};

const save = (data, callback) => {
  Product.insertMany(data, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

const deleteAll = (req, callback) => {
  Product.remove({}, (err, results) => {
    if (err) {
      console.log(`you're in Product.remove if-statement`);
      callback(err);
    } else {
      console.log(`you're in Product.remove else-statement`);
      callback(null, results);
    }
  });
};

module.exports.save = save;
module.exports.deleteAll = deleteAll;
module.exports.getAll = getAll;

// module.exports = {
//   Product,

//   getAll: (req, callback) => {
//     Product.find({})
//     .exec((err, results) => {
//       if (err) {
//         console.log(`error in database index.getAll: `, err)
//         callback(err)
//       } else {
//         console.log(`you hit database index.getAll`)
//         callback(null, results)
//       }
//     });
//   },

//   save: (req, callback) => {

//     // req.body = JSON.parse(req.body)
//     console.log(req.body)

//     // req.body.forEach((item, index) => {
//       Product.create({
//         itemimage: req.body.itemimage,
//         itemname: req.body.itemname,
//         typesize: req.body.typesize,
//         price: req.body.price,
//         description: req.body.description,
//         rating: req.body.rating,
//         numberRatings: req.body.numberRatings
//       }, (err, results) => {
//         if (err) {
//           console.log(`you're in Product.create if-statement`)
//           callback(err)
//         } else {
//           console.log(`you're in Product.create else-statement`)
//           callback(null, results)
//         }
//       })
//     // })
//   },

//   deleteAll: (req, callback) => {
//     Product.remove({}, (err, results) => {
//       if (err) {
//         console.log(`you're in Product.remove if-statement`)
//         callback(err)
//       } else {
//         console.log(`you're in Product.remove else-statement`)
//         callback(null, results)
//       }
//     })
//   }

// };
