const express = require('express');
const mongoose = require('mongoose');
const config = require ('./config/dev');
const Rental = require('./models/rental');
const FakeDb = require('./fake-db');

const rentalRoutes = require('./routes/rentals');

mongoose.connect(config.DB_URI).then(()=>{
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
    console.log('Written');
});

const app = express();

app.use('/api/v1/rentals', rentalRoutes);

app.get('/rental', function(req, res){
    res.json({'success': true})
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, function(){
    console.log("Node Server running! on", PORT);
});

// const MongoClient = require('mongoose').MongoClient;
// const uri = "mongodb+srv://TestSubjectX23:Palitosdepan1@cluster0-iptmm.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
//                 client.connect(err => {
//                 const collection = client.db("bwm-ng-dev").collection("Rentals");
//                 // perform actions on the collection object
//                 client.close();
//             }
//             );
// };