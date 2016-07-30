var mongo = require('mongodb').MongoClient
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db) {
    if (err) throw err
    var docs = db.collection('prices')
    var match = { $match: { size: process.argv[2] } }
    var group = { $group: { _id: 'average', average: { $avg: '$price' } } }
    docs.aggregate([match, group]).toArray(function(err, results) {
        if (err) throw err
        if (!results.length) throw new Error('No results found')
        console.log(Number(results[0].average).toFixed(2))
    })
    db.close();
})