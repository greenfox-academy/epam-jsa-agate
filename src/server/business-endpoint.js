const dbUtility = require('./db-utility');
const businessesJson = require('./businesses.json');
const MongoClient = require('mongodb').MongoClient;
const collectionName = 'businesses';

dbUtility.insertFileToDatabase(businessesJson, collectionName);

const apiBusinessesGET = function(callback) {
  const url = dbUtility.createDatabaseUrl();
  MongoClient.connect(url, function(err, db) {
    if (err === null) {
      let collection = db.collection(collectionName);
      collection.find({}).toArray(function(err, docs) {
        if (err === null && docs.length > 0) {
          callback(true, docs);
        } else {
          callback(false);
        }
      });
    } else {
      console.log('err', err);
      callback(false);
    }
    db.close();
  });
};

module.exports = {
  apiBusinessesGET: apiBusinessesGET,
};
