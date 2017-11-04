/*
populate/update existing data from DB

submit form data to firbase

determine next arrival and mins away

display firebase data to displayTable

dynamic times for next arrival and mins away 

*/

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBjsTLqFSietrFRiR4mnv6yOVKskVXqey8",
    authDomain: "train-times-ad6fd.firebaseapp.com",
    databaseURL: "https://train-times-ad6fd.firebaseio.com",
    projectId: "train-times-ad6fd",
    storageBucket: "train-times-ad6fd.appspot.com",
    messagingSenderId: "17920144672"
  };

firebase.initializeApp(config);

// console.log(firebase);

var database = firebase.database();

/* populate existing data */

var ref = database.ref('trains');

ref.on('value', function(snapshot) {  /*call for populating table */
	// console.log(snapshot.val());
	// console.log(ref);

	var keys = Object.keys(snapshot.val());
	// console.log(keys);
	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		var row = snapshot.val()[key];
		console.log(row);
		
		timing(row.departure, row.frequency);

		//From here I would create <td> tags for the results of the .on("click") and timing() and create the table 
	}  

}) 


/* on.submit push data to the DB */

$("#submitBTN").on("click", function(){

	event.preventDefault();

	var trainName = $("#trainName").val().trim();
	var destinationInput = $("#destinationInput").val().trim();
	var firstTime = $("#firstTime").val().trim();
	var frequencyInput = parseInt($("#frequencyInput").val().trim());

	console.log("The Train's Name is " + trainName)
	console.log("The Train's destination is " + destinationInput)
	console.log("The Train first departs at " + firstTime)
	console.log("The trains has intervals of " + frequencyInput)

	var data = {
		train: trainName,
		destination: destinationInput,
		departure: firstTime,
		frequency: frequencyInput,
	}
	console.log(data);

	var ref = database.ref('trains');
	ref.push(data);

	$("#trainName").val("")
	$("#destinationInput").val("")
	$("#firstTime").val("")
	$("#frequencyInput").val("")
})


function timing (departure, frequency) {
	
	console.log('Departure ', departure, 'Interval ', frequency);

	var now = moment();
	var departureMoment = moment(departure, 'HH:mm');

	var interval = moment.duration(frequency, 'minutes');

	// console.log('Interval? -- ', interval);

	console.log('Now: ', now.format('HH:mm') )
	console.log('Departure: ', departureMoment.format('HH:mm') )
	console.log('Time to now -- ', departureMoment.toNow())
	console.log('Time from now -- ', departureMoment.fromNow())

	var departureTime = new moment(departure);
	// console.log(departureTime.isBetween(Date.now()))

	var now = new Date()
	// var currentTrain = departureMoment.add(frequency, 'minutes').format('HH:mm');
	var nextTrain;
	var counter = 0;
	// console.log("an attempt at the currentTrain " + currentTrain);
	// console.log("an attempt to show moment time " + moment(currentTrain));

	while(!nextTrain && counter < 50) {
	// console.log("the current frequency: " + interval.format('minutes'));
		

	// And this is where I could not figure out how to get the right formating for moment.js to get the loop to spit out the right time 
	// At one point I did have the loop adding the time and ending once the depatureMoment + interval was past the current time
	// But then in my fumbling trying to figure out how to get the nextTrain to spit out the right time I had destroyed whatever it was that was working


		var currentTrain = departureMoment.add(frequency, 'minutes');
		// console.log(currentTrain);
		if (currentTrain.isAfter(moment())) {
			nextTrain = departureMoment + frequency
		} else {
			departureMoment = departureMoment + frequency
		}

		counter++
	}
console.log("next train " + nextTrain)
	return(nextTrain);
	;// have next train interval
}

// timing();