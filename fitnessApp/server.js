// require statements
const express = require ('express')
const app = express()
const mongoose = require ('mongoose')
const methodOverride = require ('method-override')
require('dotenv').config()
const User = require('./models/user')
const Macros = require('./models/macros')

//view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
//middleware
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.use(express.static('public'));

//database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

//Dashboard

app.get('/', (req, res)  => {
    User.find({},(err,users) =>{
        console.log(err)
        res.render('Index', {
            users: users
        })
    })
})

// post new user

app.post('/', (req, res) =>{
    if (req.body.isMale === "on") {
        req.body.isMale = true
    } else {
        req.body.isMale = false
    }
    if (req.body.useHormones === "on") {
        req.body.useHormones = true
    } else {
        req.body.useHormones = false
    }
    User.create(req.body, (err, createdUser) => {
        console.log(err)
    })
    res.redirect('/')
  })
  
// new user

app.get('/user/new', (req, res) => {
    res.render('NewUser.jsx', {})
})

//delete user

app.delete("/user/:id", (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect("/");
    });
  });

//edit user
app.get("/user/:id/edit", (req, res) => {
    User.findById(req.params.id,    (err, founduser) => {
      //find user
      console.log(err)
      if (!err) {
        res.render("EditUser", {
            user: founduser,
          //pass in the founduser so we can prefill the form
        });
      } else {
        res.send({ msg: err.message });
      }
    });
  });


//update user

app.put("/user/:id", (req, res) => {
    if (req.body.isMale === "on") {
        req.body.isMale = true
    } else {
        req.body.isMale = false
    }
    if (req.body.useHormones === "on") {
        req.body.useHormones = true
    } else {
        req.body.useHormones = false
    }
    User.findByIdAndUpdate(req.params.id, req.body, (err, updateduser) => {
        console.log(err)
      console.log(updateduser);
      res.redirect(`/user/${req.params.id}`);
    });
  });

// user show route

app.get("/user/:id", (req, res) => {
    User.findById(req.params.id, (err,founduser) => {
        console.log(err)
        console.log("Found: ", founduser);
        res.render("ShowUser", {
            user: founduser,
        })       
    }).populate({path: 'macros', select: 'calories protein carbs fats'});   
})

//macros new route

app.get('/user/:id/Macros/new', (req, res) => {
    User.findById(req.params.id, (err,founduser) => {
        console.log(err)
        console.log("Found: ", founduser);
        res.render("NewMacros", {
        user: founduser,
      });
    });
  });

    


//macros post

app.post('/user/:id/Macros/new', (req, res) =>{
   
    Macros.create(req.body, (err, createdMacros) => {
        console.log(createdMacros.id)
        res.redirect(`/user/${req.body.owner}`)
    })  
})


//set port
app.listen(3000, () => {
    console.log('listning on port 3000')
})
