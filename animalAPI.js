const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors()) //이 서버에 cors를 사용하겠다

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params //:name값을 받아와서 value값을 { name }이라는 변수에 바로 넣어줌
    console.log(name)

    if(name == "dog"){
        res.json({'sound' : '멍멍'})
    } else if(name == "cat"){
        res.json({'sound' : '야옹'})
    } else if(name == 'pig'){
        res.json({'sound' : '꿀꿀'})
    } else{
        res.json({'sound' : '알수없음'})
    }
    
})


app.listen(port, () => {
        console.log('Example app listening on port '+ port)
})