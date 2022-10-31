
const express = require('express');
const bodyParser = require('body-parser')


const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();
const path = require('path');


app.set('view engine', 'pug');
app.set('views','views')
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')))

//filtering and only passing routes that starts with admin
app.use("/admin",adminData.routes);

app.use(shopRoutes);


app.use((req,res,send)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})


app.listen(3000)