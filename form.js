class Form{

constructor(){

this.input = createInput('Name')
this.button = createButton('Play')
this.greating = createElement('h3')


}

hidedetails(){

    this.input.hide()
    this.button.hide()
    this.greating.hide()



}

display(){

var title = createElement('h2')
title.html("Crafting And Building The World Game")
title.position(displayWidth/2,20)


this.input.position(displayWidth/2,160)


this.button.position(displayWidth/2,200)


this.button.mousePressed(()=>{

    this.input.hide();
    this.button.hide();
    player.Name = this.input.value()
    PlayerCount = PlayerCount+1
    player.index = PlayerCount
    player.update()
    player.updateCount(PlayerCount)
    this.greating.html("Hello"+player.Name)
    this.greating.position(130,160)



})











}


}