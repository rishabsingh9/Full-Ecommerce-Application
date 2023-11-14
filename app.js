const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');

const errorController = require('./controllers/error');
//const mongoConnect=require('./util/database').mongoConnect;
const User=require('./models/user')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//   User.findById("654c911619fe4909bb7de214")
//     .then(user => {
//       console.log("user ",user)
//       req.user = new User(user.name,user.email,user.cart,user._id);
//       next();
//     })
//     .catch(err => console.log(err));
 
// });

 app.use('/admin', adminRoutes);
 app.use(shopRoutes);

app.use(errorController.get404);


mongoose.connect('mongodb+srv://rishabsinghrs369:Setdosa%4023@cluster0.seegphb.mongodb.net/shop?retryWrites=true&w=majority')
.then(result=>{
  app.listen(3000);
})
.catch(err=>{
  console.log(err);
})