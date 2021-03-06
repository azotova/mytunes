// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
   
   
  initialize: function(params){
    this.on("add", function() {
      if (this.length ===1) {
        this.playFirst();
      }
    });

    this.on("ended", this.onEnded, this);
    this.on("dequeue", this.onDequeue, this);
  },
 
  playFirst: function(){
    this.models[0].play();
  },
  
  onEnded: function(song) {   //song argument is not passed in, it's always undefined. Keep it here for sentimental reasons;
  //	console.log("song", song);
  	this.shift();
    if (this.length >= 1) {  //sign copied from the solution lecture and generally makes sense
      this.playFirst();
    }
  },

  onDequeue: function(song) {
 // 	console.log("deqSong", song);
    this.remove(song);
  }

});



/*var testFun = function() {
	return function() {
      console.log("Fine", arguments);
    };
}*/

/*function(){
    console.log("ended");
    console.log("models", this.models);
    //var songNumber = this.models.indexOf(endedSong);
    console.log("songNumber", songNumber);
    //this.remove(e)...
    this.models.splice(songNumber, 1);
  }*/

    
 