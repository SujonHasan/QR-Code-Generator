const qrcode = require('qrcode');
const path = require('path');

for (let index = 5000000000; index <= 5000000000; index++){
    const data = JSON.stringify(index);
    
    qrcode.toFile(path.join(__dirname,'files',`${index}.png`),data, (err)=>{
        if(err) return console.log(err);
    });
}

console.log('Mission Completed');