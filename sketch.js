
var database;
var GameState = 0;
var PlayerCount = 0;
var player,game,form;
var AllPlayer;
var player1,player2;

function setup(){
    createCanvas(displayWidth,displayHeight);
    
    database = firebase.database()


    game = new Game()
    game.getState()
    game.Start()

    
   
}


function draw(){
    background("white");

    if(PlayerCount===2){
        game.update(1)
    }
    
    if(GameState===1){
        clear()
        game.Play()
        player.readPosition1();
        player.readPosition2();
        if(keyDown(LEFT_ARROW)){
            player.writePosition1(-1,0);
          }
          else if(keyDown(RIGHT_ARROW)){
            player.writePosition1(1,0);
          }
          else if(keyDown(UP_ARROW)){
           player. writePosition1(0,-1);
          }
          else if(keyDown(DOWN_ARROW)){
            player.writePosition1(0,+1);
          }
    
    }
}

