# Squad Spot (Friend Finder) - Node/Express App

### Squad Spot is a compatibility-based application

* The application will take in results from users' surveys then compare their results against other users' survey results. After submitting the survey, the application displays the name and picture of the user ("friend") with the best match in a modal pop-up.

* The survey has 10 statements that apply to the user's self-description/depiction; the user's answers to the survey statements are weighted (given points) on a scale of 1-5: "5" meaning that the user strongly agrees with the statement, "1" meaning the user strongly disagrees, and "3" being neutral.


## Technical development
* The application uses Express built-ins to handle routing 
* The server.js file uses the npm packages: express, body-parser, etc.

* The `html-routes.js` file demonstrates two routes (READ):
	* A GET route for `/survey` which displays the survey page.
	* A GET route for `index.html` which displays the home page. 

* The `api-routes.js` file also demonstrates two routes (GET & POST):
	* A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends
	* A POST route `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

   		
* Compatibility will be determined based on the following.
	* Each user's results is converted into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
	* The user's scores are compared against other users' scores, response by response. The absolute value of the variance (difference) is taken as the total difference. Lower total difference between scores results in the selection of the best match:
		
		* Example: 
			* User A: [
				   Q1: 5, 
				   Q2: 1, 
				   Q3: 4, 
				   Q4: 4, 
				   Q5: 5, 
				   Q6: 1, 
				   Q7: 2, 
				   Q8: 5,
				   Q9: 4, 
				   Q10: 1
				  ]
				    (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
			* User B: [
				   Q1: 3, 
				   Q2: 2, 
				   Q3: 5, 
				   Q4: 4, 
				   Q5: 5, 
				   Q6: 1, 
				   Q7: 2, 
				   Q8: 5, 
				   Q9: 4, 
				   Q10: 1
				  ]
				    (ex: [3, 2, 5, 4, 5, 1, 2, 5, 4, 1]).
			* Total Difference: 2 + 1 + 1 = 4


* Once the closest match has been determined, it will display the result back to the user in the form of a modal pop-up. 

* The result will display both the name and picture of the closest match. 
