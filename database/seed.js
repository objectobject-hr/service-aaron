// const db = require('./dbconnection/index.js');
const Product = require('./index.js');
const Products = Product.Product;

const images = ['https://www.ikea.com/us/en/images/products/ypperlig-table__0737127_PE740896_S5.JPG?f=s',
'https://www.ikea.com/us/en/images/products/skogsta-dining-table-acacia__0546603_PE656255_S5.JPG?f=s',
'https://www.ikea.com/us/en/images/products/tingby-table-white__0737124_PE740897_S5.JPG?f=s',
'https://www.ikea.com/us/en/images/products/ekedalen-extendable-table__0736965_PE740829_S5.JPG?f=s',
'https://www.ikea.com/us/en/images/products/markerad-table__0733212_PE739320_S5.JPG?f=s',
'https://www.ikea.com/us/en/images/products/gamleby-gateleg-table-light-antique-stain-grey__0737081_PE740873_S5.JPG?f=s',
'https://www.ikea.com/us/en/images/products/torsby-table-chrome-plated-high-gloss-white__0737361_PE741017_S5.JPG?f=s',
'https://www.ikea.com/us/en/images/products/lerhamn-table__0238239_PE377693_S5.JPG?f=s',
'https://www.ikea.com/us/en/images/products/ypperlig-chair-with-armrests-in-outdoor-green__0505332_PE633865_S5.JPG?f=s',
'https://www.ikea.com/us/en/images/products/bekant-desk__0736386_PE740515_S5.JPG?f=s',
'https://www.ikea.com/us/en/images/products/lisabo-table-ash-veneer__0737105_PE740883_S5.JPG?f=s',
'https://www.ikea.com/us/en/images/products/ypperlig-bench-beech__0505369_PE633890_S5.JPG?f=s',
'https://www.ikea.com/us/en/images/products/ypperlig-nilsove-table-and-4-chairs__0720682_PE732748_S5.JPG?f=s',
'https://www.ikea.com/us/en/images/products/ypperlig-stool-beech__0505275_PE633814_S5.JPG?f=s',
'https://www.ikea.com/us/en/images/products/ekedalen-bar-table-brown__0657862_PE709998_S5.JPG?f=s',
'https://www.ikea.com/us/en/images/products/moeckelby-table-oak__0737107_PE740885_S5.JPG?f=s'
];
const productname = ['YPPERLIG', 'TINGBY', 'MORBYLANGA', 'EKEDALEN', 'MARKERAD', 'GAMLEBY', 'TORSBY', 'KEJSARKRONA', 'YPPERLIG ARM CHAIR', 'BEKANT', 'LISABO', 'YPPERLIG BENCH', 'NILSOVE', 'YPPERLIG STOOL', 'EKEDALEN BAR TABLE', 'MOCKLEBY' ];
const typesize = ['10x12x5', '9x14x6', '15x12x6', '18x13x5', '5x6x4', '9x8x3', '10x6x3', '12x12x5', '9x4x5', '7x4x4', '14x5x6']
const description = ['goes well with garden', 'comfortable', 'lol why are  you even looking at this', 'table/chair piece', 'you will like this', 'you can afford this', `don't let the price stop you`, 'lmao I have one at home', 'this might not be a good idea', 'this a good idea', 'look for a matching set', 'mm this is cute', 'summer vibes', 'will you use this lol', `you probably won't ever use this`, 'wait lol what??', 'this is nice', 'niiiiice', `this ain't a bad idea`, 'this goes haaaaard'];
const price = [299.99, 199.99, 200.00, 799.99, 79.99, 399.99, 575.00, 275.99, 799.99, 150.00, 675.99, 255.99, 400.00, 300.00, 99.99];
const ratings = [2, 2.5, 3, 3.5, 4, 4.5, 5];
const numberRatings = [23, 43, 12, 32, 67, 47, 39, 18, 21, 37, 48, 26, 53, 28, 26, 19, 16, 36, 41];

const data = [];

const createProducts = () => {
  for (var i = 0; i < productname.length; i++) {
    data.push({
      itemimage: images[i],
      itemname: productname[i],
      typesize: typesize[Math.floor(Math.random() * typesize.length)],
      description: description[Math.floor(Math.random() * description.length)],
      price: price[Math.floor(Math.random() * price.length)],
      rating: ratings[Math.floor(Math.random() * ratings.length)],
      numberRatings: numberRatings[Math.floor(Math.random() * numberRatings.length)]
    })
  }
}

const seedDatabase = () => {
  Products.deleteMany({})
  .then(Products.create(data))
  .catch((err) => console.log(err))
}

createProducts();
seedDatabase();