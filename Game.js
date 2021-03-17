class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      batter1 = createSprite(100,200);
      batter1.addImage("batter1",batter1img);
      batter2 = createSprite(300,200);
      batter2.addImage("batter2",batter2img);
      batters = [batter1, batter2];
    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
      //player.getCarsAtEnd();
      
      if(allPlayers !== undefined){
        background(rgb(198,135,103));
        image(baseballfield, 0,-displayHeight*4,displayWidth, displayHeight*5);
        }
      if(player.lives <= 0){
        gameState = 2;
        //player.rank +=1
        //Player.updateCarsAtEnd(player.rank)
      }
     
      drawSprites();
    }
  
    end(){
      console.log("Game Ended");
      strokeWeight(10)
      text('GAME OVER', 400, 400)
      //console.log(player.rank);
      //window.alert('GAME OVER!  \n RANK IS:', player.rank)
      //alert('OVERRRRRRRRRR')
  
    }
     /* swal({
        title: `Awesome!${"\n"}Rank${"\n"}${player.rank}`,
        text: "You reached the end line successfully",
        //imageUrl:
        //imageSize: "100x100",
        confirmButtonText: "Ok",
      }); */
}
  