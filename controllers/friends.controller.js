const friends = require('../models/friends.model')

function postFriends(req, res) {
    if (!req.body.name) {
        return res.status(400).json({ //we use return to avoid to continue with success code 
            error: 'Missing Friend Name'
        });
    }

    const newFriend = {
        name: req.body.name,
        id: friends.length
    };
    friends.push(newFriend);

    res.json(newFriend); // if newFriend added successfully we return json of that friend
}

function getFriends(req, res) { // we can set the method using app => app.method_name( path to the route('/') , route handler function)
    res.json(friends); // instead of send we use json to confirm that our data will send in the form of json
}

function getFriend(req, res) { // we use /: bcoz anything after /friends/ is treated as friendId
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId]; // if friendId index is definited in the friends array then friend is definited
    if (friend) {
        res.status(200).json(friend);
    } else {
        //res.sendStatus(404); // its is good to return json instead of just statuscode hence Alternative =>
        res.status(404).json({
            error: "friend does not exist"
        });
    }
}

module.exports = {
    postFriends,
    getFriends,
    getFriend,
};