const express               =  require('express'),
      app                   =  express(),
      mongoose              =  require("mongoose"),
      path                  = require('path'),
      methodOverride        = require('method-override');
      passport              =  require("passport"),
      bodyParser            =  require("body-parser"),
      LocalStrategy         =  require("passport-local"),
      passportLocalMongoose =  require("passport-local-mongoose"),
      Listing               =  require('./models/listing'),
      User                  =  require("./models/user");
   


//Connecting to database
mongoose.connect('mongodb://localhost/myListing')
    .then(() => {
        console.log("Connection open");
    })
    .catch(err => {
        console.log("Connection error");
        console.log(err);
    })
//
    app.use(require("express-session")({
        secret:"Any normal Word",       //decode or encode session
        resave: false,          
        saveUninitialized:false    
    }));
    
    passport.serializeUser(User.serializeUser());       //session encoding
    passport.deserializeUser(User.deserializeUser());   //session decoding
    passport.use(new LocalStrategy(User.authenticate()));


 
    app.use(bodyParser.urlencoded({ extended:true }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
    app.use(express.urlencoded({extended: true}));
    app.use(methodOverride('_method'));
    app.use(express.static(path.join(__dirname, 'public')));


 app.get('/index_user',isLoggedIn ,async (req,res) =>{
    const users = await User.find({});
    res.send("listings/index_user",{users});
})


//Authorization Routes

app.get('/login',(req,res)=>{
    res.render('listings/login');
});

app.post('/login',passport.authenticate("local",{
    
    successRedirect:"/user",
    failureRedirect:"/login"
}),async (req, res) => {
});

//Form to get register
app.get('/register',(req,res)=>{
    res.render('listings/register');
});

//
app.post('/register',(req,res)=>{   
    User.register(new User({username: req.body.username}),req.body.password,function(err,user){
        if(err){
            console.log(err);
            res.render('listings/register');
        }
    passport.authenticate("local")(req,res,function(){
        res.redirect('/login');
    })    
    })
})

//Route to homepage when user log out
app.post('/logout', function(req, res){
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/homepage');
    });
  });

function isLoggedIn(req,res,next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('login');
}


//CRUD Routes

 // View all listings when login as user
 app.get('/user', async (req, res) => {
const lists = await Listing.find({});
res.render('listings/index_user', {lists});
})

 // View all listings when login as guest or as default landing page for guest
app.get('/homepage', async (req, res) => {
    const lists = await Listing.find({});
    res.render('listings/index_guest', {lists});
})

// View listings's details when login as user or as default landing page for user
app.get('/listings/:id/show_user', async (req, res) => {
    const {id} = req.params;
    const lists = await Listing.findById(id,req.body);
    res.render('listings/show_user', {lists});
})

// View listings's details when login as guest
app.get('/listings/:id/show_guest', async (req, res) => {
    const {id} = req.params;
    const lists = await Listing.findById(id);
    res.render('listings/show_guest', {lists});
})


// Form to edit a review
app.get('/listings/:id/updatereview', async (req, res) => {
    const {id} = req.params;
    const lists = await Listing.findById(id);
    //res.send(result);
    res.render('listings/edit', {lists});
})


//update serving adding a review using PUT
app.put('/updateComment/:id',async (req,res) => {
    const {id} = req.params;
    if(req.body.listingReview=== {}){
        res.redirect(`/listings/${id}/show_user`);
    } else {
     Listing.updateOne(
      { _id: id },
      { $push: { reviews :  [`${req.body.listingReview}`]}},
      (err, result) => {
        if (err) {
          res.send(err);
        } else {
            console.log(req.body.listingReview);  
          res.redirect(`/listings/${id}/show_user/#reviews`);
          
        }})};

  });
  

//Listen On Server
app.listen(process.env.PORT ||3000,function (err) {
    if(err){
        console.log(err);
    }else {
        console.log("Server Started At Port 3000");
    }
      
});
