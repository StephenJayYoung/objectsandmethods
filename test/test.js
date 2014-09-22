var chai = require("chai");
var lib = require('../index');
var expect = chai.expect;
var _ = require('lodash');
var whoWonTheRace = lib.whoWonTheRace;




describe("whoWonTheRace()", function() {
	//accesses the object
	it('tells us who won the footrace', function() {
		//adds the first and last name
		var racers = {
		'TheWinner': 'The Fastest Footracer',
		};
		expect(whoWonTheRace(racers.TheWinner)).to.eql('The Fastest Footracer');
	});
});




