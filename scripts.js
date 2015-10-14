
function deal(){
	var deck =[];
	//fill deck in order (for now)
	//suit
	var suit = ""
	for(s = 1; s <= 4; s++){
		if(s === 1){
			suit = "h";
		}else if(s === 2){
			suit = "s";
		}else if(s === 3){
			suit = "d";
		}else if(s === 4){
			suit = "c";
		}
		//card number
		for(i = 1; i <= 13; i++){
			deck.push(i + suit);
		}
	}
	

	var numberOfTimesToShuffle = Math.floor( Math.random() * 500 + 500);

	//shuffle the deck
	for(i = 0; i < numberOfTimesToShuffle; i++)
		//pick 2 random cards from th deck. and switch them
		var card1 = Math.floor(Math.random() * 52);
		var card2 = Math.floor(Math.random() * 52);
		var temp = deck[card2];
		deck[card2] = deck[card1];
		deck[card1] = temp;

	console.log(deck[card2]);
	console.log(deck[card1]);

}