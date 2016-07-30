var mongo = require('mongodb').MongoClient
mongo.connect('mongodb://localhost:27017/' + process.argv[2], function(err, db) {
    if (err) throw err
    var docs = db.collection(process.argv[3])
    docs.remove({
        _id: process.argv[4]
    }, function(err, data) {
        if (err) throw err
    })
    db.close();
})