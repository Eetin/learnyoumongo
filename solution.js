var mongo = require('mongodb').MongoClient
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
    if (err) throw err
    var docs = db.collection('docs')
    var newDoc = { firstName: process.argv[2], lastName: process.argv[3] }
    docs.insert(newDoc, function(err, records) {
        if (err) throw err
        console.log(JSON.stringify(newDoc))
    })
    db.close();
})