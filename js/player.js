class Player{
    constructor(){

    }

    getCount(){
        var refB = db.ref("playerCount");
        refB.on("value", function(data){ PlayerCount = data.val(); });
    }

    updateCount(count){
        db.ref("/").update({"playerCount" : count});
    }

    updateName(name){
        var playerIndex = "player"+PlayerCount;
        db.ref(playerIndex).set({"Name" : name});
    }
    
}