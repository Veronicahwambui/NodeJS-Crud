const express = require('express');
var app = express();

//  app.get('/', function(req, res) {
//     res.send('Hello Baby!')
//  }
//  )

 app.use(express.json())
 app.use(express.urlencoded({ extended:false }))
 app.use('/api/user',require('./routes/api/user'))

app.listen(3000,()=>{
    console.log('listening on port 3000');
})