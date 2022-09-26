// require statements
const express = require ('express')
const app = express()
const mongoose = require ('mongoose')
const methodOverride = require ('method-override')
require('dotenv').config()
const Xbox = require ('./models/xbox')
const Pc = require('./models/pc')

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

//index

app.get('/', (req, res)  => {
    Xbox.find({},(err,xboxGames) =>{
        console.log(err)
        res.render('Index', {
            xboxGames: xboxGames
        })
    })
})



//post
app.post('/', (req, res) =>{
    if (req.body.wasItGood === "on") {
        req.body.wasItGood = true
    } else {
        req.body.wasItGood = false
    }
    Xbox.create(req.body, (err, createdXboxGame) => {
        console.log(err)
    })
    res.redirect('/')
  })


//new

app.get('/xbox/new', (req, res) => {
    res.render('NewXbox.jsx', {})
})

app.get('/pc/new', (req, res) => {
    res.render('NewPc.jsx', {})
})

//edit
app.get("/xbox/:id/edit", (req, res) => {
    Xbox.findById(req.params.id,    (err, foundXboxGame) => {
      //find xbox game
      console.log(err)
      if (!err) {
        res.render("EditXbox", {
            xboxGame: foundXboxGame,
          //pass in the foundxboxgame so we can prefill the form
        });
      } else {
        res.send({ msg: err.message });
      }
    });
  });


//update

app.put("/xbox/:id", (req, res) => {
    if (req.body.wasItGood === "on") {
      req.body.wasItGood = true;
    } else {
      req.body.wasItGood = false;
    }
    Xbox.findByIdAndUpdate(req.params.id, req.body, (err, updatedXboxGame) => {
        console.log(err)
      console.log(updatedXboxGame);
      res.redirect(`/xbox/${req.params.id}`);
    });
  });


//delete
app.delete("/xbox/:id", (req, res) => {
    Xbox.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect("/");
    });
  });


//seeds

app.get('/xbox/seed', (req, res) => {
    Xbox.create([
        {
            title: 'Halo',
            cost: '$50',
            wasItGood: true
         },
         {
            title: 'Halo 2',
            cost: '$60',
            wasItGood: true
         },
         {
            title: 'Halo 3',
            cost: '$60',  
            wasItGood: true
         }
    ], (err, data) => {
        res.redirect('/')
    })
})


//show
app.get("/xbox/:id", (req, res) => {
    Xbox.findById(req.params.id, (err,foundXboxGame) => {
        console.log(err)
      console.log("Found: ", foundXboxGame);
      res.render("ShowXbox", {
        xboxGame: foundXboxGame,
      });
    });
  });

  app.get("/pc/:id", (req, res) => {
    Pc.findById(req.params.id, (err,foundPcGame) => {
        console.log(err)
      console.log("Found: ", foundPcGame);
      res.render("ShowPc", {
        pcGame: foundPcGame,
      });
    });
  });


app.listen(3000, () => {
    console.log('listning on port 3000')
})