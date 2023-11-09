const mongodb=require('mongodb')
const getDb=require('../util/database');

class User{
  constructor(name,email){
    this.name=name
    this.email=email
  }

  save(){
    const db=getDb();

    return db.collection('users').insertOne(this)
    .then(user=>{
      console.log('user created')
    })
    .catch(err=>{
      console.log(err);
    })
  }

  static findById(userId){
    const db=getDb();

    return db.collection('users').findOne({_id:mongodb.ObjectId(userId)})
  }
}

module.exports=User;
