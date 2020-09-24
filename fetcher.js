const { fstat } = require('fs');
const request = require('request');
const fs = require('fs');
const { argv } = require('process');
const arg1 = process.argv.slice(2)[0]
const arg2 = process.argv.slice(2)[1]


  request(arg1, (error, response, body) => {
    console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ./${arg2}`)
  
    fs.writeFile(arg2, body, (err) => {
      if(err) throw err;
    }); 
  } );

 


