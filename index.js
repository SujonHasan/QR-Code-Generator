const express = require('express');
const app = express();
const qr = require('qrcode');
const ejs = require('ejs');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3500;

app.get('/', (req, res) =>{

    res.render('index.ejs');
})

app.post('/scan', (req, res)=>{

    const text = req.body.text;

    // qr.toString(text, {type: 'terminal'}, (err, url) =>{
    //     console.log(url);
    // })

    qr.toFile(path.join(__dirname,'files',`${text}.png`),text,(err)=>{

        if(err) res.send("Error Occured");
    })

    qr.toDataURL(text,(err, src)=>{
        if(err) res.send("Error Occured");
        
        res.render('scan', {
            qr_code: src,
        })
    })

    
    

})

app.listen(PORT, ()=>{
    console.log(`listening port ${PORT}`);
})