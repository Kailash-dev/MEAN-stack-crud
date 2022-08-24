const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const User = require("./models/user");

// Connecting with mongo db
mongoose
  .connect("mongodb://127.0.0.1:27017/mydatabase")
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err.reason);
  });
// Setting up port with express js
const employeeRoute = require("./routes/employee.route");
const userRoute = require('./routes/user.route')
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());
app.use(express.static(path.join(__dirname, "dist/mean-stack-crud-app")));
app.use("/", express.static(path.join(__dirname, "dist/mean-stack-crud-app")));
app.post("/login", (req, res) => {
  console.log(req.body, "login");
  User.findOne({ username: req.body.username }, (err, user) => {
    console.log(user);
    if (user) {
      console.log('user found')
      res.status(200).json({ success: true, message: "user found" });
    } else {
      res.status(404).json({ success: false, message: "user not found" });
    }
  });
});

app.post("/register", (req, res) => {
  console.log(req.body, "register");
  User.findOne({ username: req.body.username }, async (err, user) => {
    console.log(user,err);
    if(err){
      res.send(err)
    }
    if(user){
      console.log('user exist')
    }else{
      console.log('user doesnt  exist')
      User.create(req.body,(err,user)=>{
        if(err){
         res.send(err)
        }
        if(user){
          console.log(user)
          res.status(200).json({success:true,message:'created',data:user})
        }else{
          res.status(500)
        }
      })
    }
  });
});

app.use("/api", employeeRoute);
// app.use('/api',userRoute)
// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port " + port);
});
// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  console.error(err.message); // Log error message in our server's console
  if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
});
