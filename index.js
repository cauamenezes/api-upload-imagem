const express = require('express');
const fs = require('fs');

const app = express();

app.use(expres.json());
app.use(express.urlencoded({extended:true, limit: '5MB'}));

app.post('./testeUpload', (req, res)=>{

    

});

app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM http://localhost:3000');
});