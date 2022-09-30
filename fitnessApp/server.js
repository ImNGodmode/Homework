// require statements
const express = require ('express')
const app = express()
const mongoose = require ('mongoose')
const methodOverride = require ('method-override')
require('dotenv').config()
const User = require('./models/user')
const Macros = require('./models/macros')
const Push = require('./models/push')

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
    }).populate({path: 'macros', select: 'calories protein carbs fats'}).populate({path: 'push', select: 'bench inclineBench pecdec revpecdec pushdowns latraise declinesitups'});   
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

//macros edit
app.get("/user/Macros/:id", (req, res) => {
    Macros.findById(req.params.id,    (err, foundmacro) => {
      //find macro
      console.log(err)
      if (!err) {
        res.render("EditMacro", {
            macro: foundmacro,
          //pass in the foundmacro so we can prefill the form
        });
      } else {
        res.send({ msg: err.message });
      }
    });
  });

  //macro update
  app.put("/user/Macros/:id", (req, res) => {
    
    Macros.findByIdAndUpdate(req.params.id, req.body, (err, updatedmacro) => {
        console.log(err)
        console.log(updatedmacro);
        res.redirect(`/user/${updatedmacro.owner}`);
    });
  });
  
// macro delete
app.delete("/user/Macros/:id", (req, res) => {
    Macros.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect("/");
    });
  });

  // push new
  app.get('/user/:id/push/new', (req, res) => {
    User.findById(req.params.id, (err,founduser) => {
        console.log(err)
        console.log("Found: ", founduser);
        res.render("NewPush", {
        user: founduser,
      });
    });
  });  

  //push post

app.post('/user/:id/push/new', (req, res) =>{
   
    Push.create(req.body, (err, createdpush) => {
        console.log(createdpush.id)
        res.redirect(`/user/${req.body.owner}`)
    })  
})

//macros edit
app.get("/user/Push/:id", (req, res) => {
    Push.findById(req.params.id,    (err, foundpush) => {
      //find push
      console.log(err)
      if (!err) {
        res.render("EditPush", {
            push: foundpush,
          //pass in the foundpush so we can prefill the form
        });
      } else {
        res.send({ msg: err.message });
      }
    });
  });

  //push update
  app.put("/user/push/:id", (req, res) => {
    
    Push.findByIdAndUpdate(req.params.id, req.body, (err, updatedpush) => {
        console.log(err)
        console.log(updatedpush);
        res.redirect(`/user/${updatedpush.owner}`);
    });
  });

// push delete
app.delete("/user/push/:id", (req, res) => {
    Push.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect("/");
    });
  });

//set port
app.listen(3000, () => {
    console.log('listning on port 3000')
})
