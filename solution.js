var mongo = require('mongodb').MongoClient
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
    if (err) return console.error(err)
    db.collection('parrots').find({
        age: { $gt: +process.argv[2] }
    }).toArray(function(err, docs) {
        if (err) return console.error(err)
        console.log(docs)
    })
    db.close();
})