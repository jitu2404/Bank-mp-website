const express = require('express')
const app = express()
app.set("view engine",  'ejs')
app.listen(3000)


app.use(express.static('public'))
app.get('/', (req,res)=>{
    res.render('index')
})
app.use((req,res)=>{
    res.status(404).render('404')
})