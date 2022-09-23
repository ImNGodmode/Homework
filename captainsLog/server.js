const express = require ('express')
const app = express()

const mongoose = require ('mongoose')

const methodOverride = require ('method-override')
const Logs = require('./models/logs')

require('dotenv').config()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


//parse req.body
app.use(express.urlencoded({extended: false}))

//instantiates MethodOverride for crud actions
app.use(methodOverride('_method'))


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});


//index
app.get('/logs', (req, res)  => {
    Logs.find({},(err,allLogs) =>{
        console.log(err)
        res.render('Index', {
            logs: allLogs
        })
    })
})

//new
app.get('/logs/new', (req, res) => {
    res.render('New', {})
})

//post
app.post('/logs', (req, res) =>{
    if (req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    Logs.create(req.body, (err, createdLog) => {
        console.log(err)
    })
    res.redirect('/logs')
})

// edit
app.get("/logs/:id/edit", (req, res) => {
    Logs.findById(req.params.id, (err, foundLog) => {
      //findLog
      console.log(err)
      if (!err) {
        res.render("Edit", {
          log: foundLog,
          //pass in the foundStudent so we can prefill the form
        });
      } else {
        res.send({ msg: err.message });
      }
    });
  });

//update
// --------->PUT/PATCH [U]
app.put("/logs/:id", (req, res) => {
    if (req.body.shipIsBroken === "on") {
      req.body.shipIsBroken = true;
    } else {
      req.body.shipIsBroken = false;
    }
    Logs.findByIdAndUpdate(req.params.id, req.body, (err, updatedlog) => {
        console.log(err)
      console.log(updatedlog);
      res.redirect(`/logs/${req.params.id}`);
    });
  });

// ------>DELETE   [D]
app.delete("/logs/:id", (req, res) => {
    Logs.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect("/logs");
    });
  });

// seeds

app.get('/logs/seed', (req, res) => {
    Logs.create([
        {
            title: 'close one',
            entry: 'ran into pirates today didnt think we were going to make it out of there.',
            shipIsBroken: true
         },
         {
            title: 'a good day',
            entry: 'looks like we did loose the pirates. we got most of the emergency repairs completed today',
            shipIsBroken: false
         },
         {
            title: 'BOOTY!!',
            entry: 'the title says it all we found the promise land today',
            shipIsBroken: false
         }
    ], (err, data) => {
        res.redirect('/logs')
    })
})

//show
app.get("/logs/:id", (req, res) => {
    Logs.findById(req.params.id, (err,foundLog) => {
        console.log(err)
      console.log("Found: ", foundLog);
      res.render("Show", {
        log: foundLog,
      });
    });
  });

app.listen(3000, () => {
    console.log('listning on port 3000')
})