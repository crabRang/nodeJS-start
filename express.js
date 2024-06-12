/*
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
*/
/*
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
        console.log('Example app listening on port'+ port)
})
*/

/*
예제
GET /dog => {'sound': '멍멍'}
GET /cat => {'sound': '야옹'}
*/

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/user/:id', (req, res) => {
    //변수를 사용할때는 ':'를 사용
    // const q = req.params
    // console.log(q)
    const q = req.query
    console.log(q)
    console.log(q.q)
    console.log(q.age)

    //res.json({'sound' : '멍멍'})
    res.json({'age':q.age})
})

app.get('/cat', (req, res) => {
    res.json({'sound' : '야옹'})
})

app.listen(port, () => {
        console.log('Example app listening on port '+ port)
})