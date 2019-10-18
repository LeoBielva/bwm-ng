const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require ('./config/dev');
const Rental = require('./models/rental');
const FakeDb = require('./fake-db');

const rentalRoutes = require('./routes/rentals');
const userRoutes = require('./routes/users');

const PORT = process.env.PORT || 3001;

// const MongoClient = require('mongodb').MongoClient;
// const uri = config.DB_URI;
// MongoClient.connect(uri, function(err, client) {
//     console.log(client.db);
//     if(err) {
//          console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
//     }
//     console.log('Connected...');
//   const collection = client.db("test").collection("test");
//   // perform actions on the collection object
//   client.close();
// });

mongoose.connect(config.DB_URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true}).then(()=>{
    const fakeDb = new FakeDb();
    // fakeDb.seedDb();
    console.log('Written');
}).catch(err =>{
    console.log(err)
});

const app = express();

app.use(bodyParser.json());
app.use('/api/v1/rentals', rentalRoutes);
app.use('/api/v1/users', userRoutes);

app.get('/rental', function(req, res){
    res.json({'success': true})
});

app.listen(PORT, function(){
    console.log("Node Server running! on", PORT);
});

