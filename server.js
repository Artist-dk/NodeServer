const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')



const app = express()
app.use(cors())
const port = 3000

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/app1', (req, res) => {
  res.send('app1') 
  console.log(req.query)
})
// http://localhost:3000/app1?user=artist

app.post('/app2', (req, res) => {
  let data = req.body;
  // data = req.body;
  data = JSON.stringify(req.body);
  res.send('Data Received: ' + data);
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
})










app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})