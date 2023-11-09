const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;

let _db;

const mongoConnect=callback=>{
   MongoClient.connect('mongodb+srv://rishabsinghrs369:Setdosa%4023@cluster0.seegphb.mongodb.net/?retryWrites=true&w=majority')
  .then(client=>{
    console.log("connected!");
    _db=client.db();
    callback(client);
  })
  .catch(err=>{
    console.log(err);
    throw err;
  })
}

const getDb=()=>{
  if(_db){
    return _db;
  }
  throw "No database found!"
}

exports.mongoConnect=mongoConnect;
exports.getDb=getDb;

