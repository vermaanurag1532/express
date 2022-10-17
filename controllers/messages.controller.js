const path = require('path');

// const getMessages = (req, res) => {
//     res.send('<ul><li>hellow, Anurag Verma this side . <li><ul>');
// }  // we dont use array suntax to write the function bcoz when there is an error node does not tell us that which function throw that error
function getMessages(req, res) {
    res.render('messages', {
        title: 'messages to my friends',
        friend: 'Anurag verma',
    });
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'anurag.jpeg'));
    // res.send('<ul><li>hellow, Anurag Verma this side . <li><ul>');
} // in this case node tell due to this function an error occur

function postMessages(req, res) {
    console.log('Updating messages');
}

module.exports = {
    getMessages,
    postMessages,
};