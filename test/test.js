var chai = require("chai");
var lib = require('../index');
var whoWonTheRace = lib.whoWonTheRace;



describe("whowontherace()", function() {
	//accesses the objects
	it('tells us who won the footrace', function() {
	//adds the first and last name
	});
	var racers = {
	'TheWinner': 'The Fastest Footracer',
	};
	expect(whoWonTheRace(racers.TheWinner)).to.eql('The Fastest Footracer');
	});

	// describe ('isThereANumberInThatSpace()'function() {
	// it('verifies that there is a number in the given coordinate', function() {
	// 	var puzzle = new puzzle (puzzlestring);
	// 	var coordinate = {row 0, col 0};
	// 	expect(puzzle.isThereANumberInThatSpace(coordinate).to.eql(true);
	// });



