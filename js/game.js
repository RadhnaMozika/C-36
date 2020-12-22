class Game {
    constructor(){

    }


    getState(){

        dbref = db.ref("gameState");
        dbref.on("value", function (data){GameState = data.val();} );
    }

    update(state){
        dbref.update({"gameState" : state});
    }

    start(){
        if(GameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
}