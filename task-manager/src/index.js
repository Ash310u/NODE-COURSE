const express = require('express')

const app = express()

const port = process.env.PORT || 3000

app.post('/users',(req, res) => {
    res.send('testing!')
})

app.listen(port, () => {
    console.log(`server is up on ${port}`);
})