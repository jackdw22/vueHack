const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/hackathon', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const productSchema = new mongoose.Schema({
    name: String,
    brand: String, 
    dateCreated: String, 
    blockChain: String, 
    history: Array,
    manufacturer: String,
    origin: String,
    UPC: Number,
})

const historySchema = new mongoose.Schema({
    location: String,
    date: String, 
})

productSchema.virtual('id')
.get(function() {
    return this._id.toHexString();
  });
  productSchema.set('toJSON', {
    virtuals: true
  });
  historySchema.set('toJSON',{
    virtuals: true
  });
const Product = mongoose.model('Product', productSchema);
const Transaction = mongoose.model('Transaction', historySchema); 

app.get('/api/tickets', async(req, res) =>{
    try{
        let products = await Product.find();
        res.send({products: products});
    }catch(error){
        console.log(error);
        res.sendStatus(500);
    }
}); 


app.post('/api/tickets', async (req, res) => {
    const transaction = new Transaction ({
        location: req.body.location,
        date: req.body.dateCreated,
    });  

    const product = new Product ({
    name: req.body.name,
    brand: req.body.brand,
    dateCreated: req.body.dateCreated,
    blockChain: req.body.blockChain, 
    history: [transaction],
    manufacturer: req.body.manufacturer,
    origin: req.body.origin,
    UPC: 345235697861,

  });
  try{
      await product.save();
      res.send({product:product});
  }catch (error){
      console.log(error);
      res.sendStatus(500); 
  }
  
 
});

app.post('/api/tickets/fun', async (req, res) => {
    const transaction = new Transaction ({
        location: req.body.location,
        date: req.body.date,
    })
    console.log('we are trying')
    try{
        const product = await Product.findOne({
            blockChain: req.body.blockChain,
        }); 
        console.log(product); 
        product.history.push(transaction);
        product.save(); 
        console.log(product.history); 
        res.send({}); 
    }catch (error){
        console.log(error);
    }
   
    
}); 


app.listen(3000, () => console.log('Server listening on port 3000!'));