// require statements
const express = require ('express')
const app = express()
const mongoose = require ('mongoose')
const methodOverride = require ('method-override')
require('dotenv').config()
const User = require('./models/user')
const Macros = require('./models/macros')
const Push = require('./models/push')
const Pull = require('./models/pull')
const Legs = require('./models/legs')

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
    }).populate({path: 'macros', select: 'calories protein carbs fats'}).populate({path: 'push', select: 'bench inclineBench pecdec revpecdec pushdowns latraise declinesitups'}).populate({path: 'pull', select: 'pulldowns cableRows latprayers rows preacherCurls spiderCurls woodchoppers'}).populate({path: 'legs', select:'squats legPress calfRaise hipThrust'});   
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

//push edit
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

  // pull new
  
  app.get('/user/:id/pull/new', (req, res) => {
    User.findById(req.params.id, (err,founduser) => {
        console.log(err)
        console.log("Found: ", founduser);
        res.render("NewPull", {
        user: founduser,
      });
    });
  });  

  //pull post

app.post('/user/:id/pull/new', (req, res) =>{
   
    Pull.create(req.body, (err, createdpull) => {
        console.log(createdpull.id)
        res.redirect(`/user/${req.body.owner}`)
    })  
})

//pull edit
app.get("/user/Pull/:id", (req, res) => {
    Pull.findById(req.params.id,    (err, foundpull) => {
      //find pull
      console.log(err)
      if (!err) {
        res.render("EditPull", {
            pull: foundpull,
          //pass in the foundpull so we can prefill the form
        });
      } else {
        res.send({ msg: err.message });
      }
    });
  });

  //pull update
  app.put("/user/pull/:id", (req, res) => {
    
    Pull.findByIdAndUpdate(req.params.id, req.body, (err, updatedpull) => {
        console.log(err)
        console.log(updatedpull);
        res.redirect(`/user/${updatedpull.owner}`);
    });
  });

// pull delete
app.delete("/user/push/:id", (req, res) => {
    Pull.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect("/");
    });
  });

  // legs new
  
  app.get('/user/:id/legs/new', (req, res) => {
    User.findById(req.params.id, (err,founduser) => {
        console.log(err)
        console.log("Found: ", founduser);
        res.render("Newlegs", {
        user: founduser,
      });
    });
  });  

  //legs post

app.post('/user/:id/legs/new', (req, res) =>{
   
    Legs.create(req.body, (err, createdLegs) => {
        console.log(createdpull.id)
        res.redirect(`/user/${req.body.owner}`)
    })  
})

//legs edit
app.get("/user/legs/:id", (req, res) => {
    Legs.findById(req.params.id,    (err, foundlegs) => {
      //find legs
      console.log(err)
      if (!err) {
        res.render("EditLegs", {
            legs: foundlegs,
          //pass in the foundlegs so we can prefill the form
        });
      } else {
        res.send({ msg: err.message });
      }
    });
  });

  //legs update
  app.put("/user/legs/:id", (req, res) => {
    
    Legs.findByIdAndUpdate(req.params.id, req.body, (err, updatedlegs) => {
        console.log(err)
        console.log(updatedlegs);
        res.redirect(`/user/${updatedlegs.owner}`);
    });
  });

// legs delete
app.delete("/user/legs/:id", (req, res) => {
    Legs.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect("/");
    });
  });

//set port
app.listen(3000, () => {
    console.log('listning on port 3000')
})
