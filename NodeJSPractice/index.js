
// ** This shows how to make and call emiiters **
// const { EventEmitter } = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('lunch', () => {

//     console.log('yum ')
// })


// ** Require/event listeners **
// eventEmitter.emit('lunch');

// const { readFile } = require('fs').promises;


// async function hello() {
//     const file = await readFile('./hello.txt', 'utf8');
// }



// console.log('do this ASAP')

// ** Modules **
// const myModule = require('./my-module');
// console.log(myModule.add);

const { response } = require('express');
const express = require('express');
const { readFile } = require('fs');

const app = express();

app.get('/', (request, response) => {
    
    readFile('./home.html', 'utf8', (err, html) => {
        if (err) {
           response.status(500).send('sorry, out of order') 
        }
        
        response.send(html);

    })

});

app.listen(process.env.PORT || 3000, () => console.log('App availible on http://localhost:3000'))