class Game{

constructor(){

}

getState(){

    var GameStateref = database.ref('GameState')
    GameStateref.on("value",function(data){

GameState = data.val()

})


}

update(State){

    database.ref('/').update({

       GameState:State

    })

    }

    async Start(){

        if(GameState === 0 ){

            player = new Player()
            var PlayerCountref = await database.ref('PlayerCount').once("value");
            if(PlayerCountref.exists()){

                PlayerCount = PlayerCountref.val()
                player.getCount()
            }
            //player.getCount()
            form = new Form()
            form.display()

            player1 = createSprite(100,500,50,50);
            player2 = createSprite(500,500,50,50);

        }
   
    }


    Play(){

    form.hidedetails()
    
    textSize(30)
    text("Game Start",120,100)

    
    
    
    
   

    /*Player.GetPlayerinfo()

    if(AllPlayer!== undefined ){

    var displayposition = 130;
    for(var plr in AllPlayer){

        if(plr === "player"+player.index){

            fill("red")
 }


    else {
    fill("black")
    }

    console.log("Shagun S")
    textSize(15)
    text(AllPlayer[plr].Name + ":" + AllPlayer[plr].distance , 120,100)
    displayposition = displayposition+20

    }

    


    }

    if(keyIsDown(UP_ARROW)&&player.index!==null){

        player.distance = player.distance + 50
        player.update()


    }






    }*/


    }

    }