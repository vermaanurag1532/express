// express is very good at routing 

const express = require('express'); // include express dependency 

const friendsRouter = require('./routes/friends.router.js');
const messagesRouter = require('./routes/messages.routes.js');

const app = express(); // set up our application using express function export from express package . 

const PORT = 3000; // port where you want our server 

app.use((req, res, next) => { // it is a middleware => to form a middle ware we use .use function which have req , res and next . next is a function pointing to next middleware
    const start = Date.now();
    next(); // we call the next function to ensure that express pass the request to correct handler if we remove it our express hang and our server does not send the response
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use(express.json()); // registaring our json parsing middleware bcoz our req.body.name doesnot work without it 

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
    console.log(`listening on ${PORT} ... `);
})