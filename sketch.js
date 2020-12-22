var db, dbref;
var PlayerCount = 0;
var GameState = 0;
var game, form, player;

function setup(){
    createCanvas(400, 400);

    db = firebase.database();

    game = new Game();
    
    game.getState();

    game.start();


}

function draw (){

}


