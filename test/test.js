var chai = require("chai");
var lib = require('../index');
var runARace = lib.runARace;



describe("runARace()", function() {
	//accesses the objects
	it('tells us who won the footrace', function() {
	//adds the first and last name
	var racers = {
	'TheWinner': 'The Fastest Footracer',
	};
	expect(whowontherace(racers)).to.eql('The Fastest Footracer');



