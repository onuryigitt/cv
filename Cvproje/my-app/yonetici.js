const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.json())
app.use(cors())
const uname = "yönetici";
const pword = "1234567"
app.post('/api/auth/login',(req,res,next) => {


    const {username,password} = req.body;
    if(username === uname && password === pword){
        res.json({
            success:true,
            message:'Giriş Başarılı'
        })
    }
    else{
        res.json({
            success:false,
            message:'Bilgileri Kontrol Edin'

    })
    }

    next();


})
 
app.listen(5000,() => {
    console.log('http://localhost:5000 started')
})