class Form {
    constructor(){

    }

    display(){
        var title = createElement("h2");
        title.html("CarRacingGame");
        title.position(140, 10);

        var input = createInput("Name");
        input.position(140, 160);

        var button = createButton("Submit");
        button.position(150, 180);

        var greeting = createElement("h3");

        button.mousePressed(function(){ 
            input.hide();
            button.hide();
            var name = input.value();
            PlayerCount = PlayerCount + 1;
            player.updateCount(PlayerCount);
            player.updateName(name);
            greeting.html("Hello, "+name);
            greeting.position(140, 60);
         })
    }
}