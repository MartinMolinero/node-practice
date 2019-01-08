const http = require('http');

const routes = require('./routes')
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')
const app = express();


app.use(bodyParser.urlencoded({extended: false}))

app.use('/admin',adminRouter)
app.use(shopRouter)


app.use((req,res,next) => {
  //res.status(404).send('<h1>Page not found</h1>')
  res.status(404).sendFile(path.join(__dirname, './', 'views', '404.html'))
})


const server = http.createServer(app);

server.listen(3000);
