const express = require('express')
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')

// create a server
const app = express();

// a setting to parse json or html body on postman to a string
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// initiate API, app.use is generic
app.get("/",(req,res,next)=>{
    console.log('root route');
    res.send('<h1> default in index.js; always on </h1>');
    next()
})

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

app.listen(3000, () => console.log("listening on port 3000"));

