// Pull in the friend data
var friends = require('../data/friends.js');

// Pull in required dependencies? Is path needed for this?
var path = require('path');

// a POST routes /api/friends - the handling for incoming survey results, and the compatibility logic
// Export API routes
module.exports = function(app) {
	console.log('___ON apiRoutes.js___');

	// Pulling in total list of friend data/values
	app.get('/api/friends', function(req, res) {
		res.json(friends);
		console.log("Friend data/values available.");
	});

	// Then we use the post method to add new friend data
	app.post('/api/friends', function(req, res) {
		
        //grabs the new user's data/values to compare with friends in friends array/collection
        var newFriendScores = req.body.scores;
        var scoresArray = [];
//        var friendCount = 0;
        var bestMatch = 0;

        for (var i=0; i<friends.length; i++){
            var scoresDiff = 0;
            //run through scores to compare friends
            for (var j=0; j <newFriendScores.length; j++){
                scoresDiff +=
                (Math.abs(parseInt(friends[i].scores[j])-
                parseInt(newFriendScores[j])));
            }
            //push results into scoresArray
            scoresArray.push(scoresDiff);
        }
        
        //after all friends' scores are compared, find best match (best match is '0', i.e. no difference in scores)
        for (var i=0; i<scoresArray.length; i++) {
            if (scoresArray[i] <= scoresArray[bestMatch]) {
                bestMatch = i;
            }
        }
        
        //return bestMatch data
        var bff = friends[bestMatch];
        res.json(bff);
        
        //pushes new submission into the friendsList array
        friends.push(req.body);
    });
};