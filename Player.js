class Player{

    constructor(){

        this.index = null
        this.Name = null
        this.distance = 0

    }

getCount(){

    var PlayerCountref = database.ref('PlayerCount')
    PlayerCountref.on("value",function(data){

PlayerCount = data.val()

})


}

updateCount(Count){

    database.ref('/').update({
        PlayerCount:Count

    })

    }

update(){

    var PlayerIndex = "Player"+this.index;
    database.ref(PlayerIndex).set({

        Name:this.Name,
        position : {
            x: 500,
            y:500,
        }
     

       
    })
}


readPosition1(){
    var player1inforef=database.ref('Player1/position');
    player1inforef.on("value",(data)=>{
     position1 = data.val();
     player1.x = position1.x;
     player1.y = position1.y;
    })
}
readPosition2(){
   
    var player2inforef=database.ref('Player2/position');
    player2inforef.on("value",(data)=>{
        position2 = data.val();
        player2.x = position2.x;
        player2.y = position2.y;
    })      
}

 writePosition1(x1,y1){
    database.ref('Player1/position').set({
      'x': position.x + x1 ,
      'y': position.y + y1
    })
  }

  writePosition2(x2,y2){
    database.ref('Player2/position').set({
      'x': position.x + x2 ,
      'y': position.y + y2
    })
  }



static GetPlayerinfo(){

var Playerinfo = database.ref('Players')
Playerinfo.on("value",(data)=>{

AllPlayer = data.val()
console.log("Hi I AM HERE")



})









}











}