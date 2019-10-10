var Deck = function Deck(){
    this.deck = [];
    this.reset();
    this.shuffle();
};

Deck.prototype.reset = function(){
    var suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
    var vals = ['ace',2,3,4,5,6,7,8,9,10,'jack','queen','king'];

    for(var suit in suits){
        for(var val in vals){
            this.deck.push(vals[val]+' of '+suits[suit]);
        }
    }
    return this;
};
Deck.prototype.shuffle = function(){
    var m = this.deck.length, t, i;
    
    // While there remain elements to shuffle…
    while (m) {
    
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
    
        // And swap it with the current element.
        t = this.deck[m];
        this.deck[m] = this.deck[i];
        this.deck[i] = t;
    }
    
    return this;
};
Deck.prototype.deal = function(){
    return this.deck.pop();
};

var Player = function Player(name){
    this.name = name;
    this.hand = [];
}

Player.prototype.draw = function(deck){
    this.hand.push(deck.deal());
    return this;
}

Player.prototype.discard = function(i){
    return this.hand.pop();
}

var deck1 = new Deck();
var player1 = new Player();
player1.draw(deck1).draw(deck1).draw(deck1).draw(deck1).draw(deck1);
console.log(deck1);
console.log(deck1.deck.length);
console.log(player1.hand);







asdfl;MediaStreamAudioDestinationNode;lfmas;ldmfa;masd