const express = require('express')
const {json} = require ('body-parser')
const cors = require ('cors')
const session = require('express-session')
const massive = require ('massive')
const axios = require ('axios')

const app = express()

app.use(json())
app.use(express.static(__dirname + "/public"))

app.get('/api/datasets', (req, res) => {
  axios.get("https://api.quizlet.com/2.0/users/dadleatherwood/sets?client_id=s4VUDpxjrx&whitespace=1")
  .then(response => {
    res.status(200).json(response.data)
  })
  .catch(err => {
    console.log(err);
  })
})

app.listen(4000, function() {
  console.log("I am listening on port 4000");
})
