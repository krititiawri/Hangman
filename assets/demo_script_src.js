
function myFunction() {
//  It will be false if you win or loose the game  
  var enableflag = true;
//Declaring an object name containing function and variable
   document.getElementById("game-loose").innerHTML ="";
 	 var words = ["food","sleep","drink","play"];
   var word = words[Math.floor(Math.random() * words.length)];
   console.log(word);

//Object Declartion
 var hangGame = {
   gussedWord : [],
    z : 0,
   test : [],
   invalidcounter : 0,
  counter :word.length,
//Array of words; 	
dash: [],
//Function to check if the enteres letter is a letter or number    
 	allLetter:function(inputtxt){
 	var letters = /^[A-Za-z]+$/; 
 	console.log(letters) ;
   if(inputtxt.match(letters))  
     {  
      return true; 

     }  
   else  
     {  
     alert("Please enter a valid word");
     return false;  
     }  
},

 creatingDash:function(word){

 		for(var i=0; i< word.length; i++){
 			
 		 hangGame.dash[i] = "_";
 		 document.getElementById("Start_key").innerHTML = hangGame.dash;
 		 console.log(Start_key);

 		}
 	},
//var myPictures = ["food.jpg","sleep.jpg","images.jpg"];
  myPictures: ["<img  src = 'assets/images/food.png' >",
               "<img    src = 'assets/images/sleep.png'>",
               "<img src = 'assets/images/drink.png' >",
               "<img src = 'assets/images/play.png'>"
                    
                    ],
// Changinging images on each win  
 getImage:function(){
            var pic = words.indexOf(word);
            var catgory = document.getElementById("game-pic");
            catgory.innerHTML = hangGame.myPictures[pic];
     },

 mySongs : ["<audio controls><source src='assets/songs/Food.mp3' type='audio/mpeg' </audio>",
            "<audio controls><source src='assets/songs/01.mp3' type='audio/mpeg'></audio>",
            "<audio controls><source src='assets/songs/02.mp3' type='audio/mpeg'></audio>",
            "<audio controls><source src='assets/songs/05.mp3' type='audio/mpeg'></audio>" ,
           ],
                
// Changing songs on each win  
 getSong : function(){
    var song  = words.indexOf(word);
    var cat = document.getElementById("game-song"); 
    cat.innerHTML =hangGame.mySongs[song];
   }   
 
};
// Creating the dashes
hangGame.creatingDash(word);

 //This function is run whenever the user presses a key.
 document.onkeyup = function(event){ 
// Determines which key was pressed.
     	var userGuess = event.key;
// If the entered charachter is a letter or a number      		
     	if (userGuess && enableflag){
     		hangGame.allLetter(userGuess);       
// To iterate through the word and print the word on dashes
     		for(var j=0; j< word.length; j++){           
     		 	if(word[j] === userGuess){
     		 		hangGame.dash[j] = userGuess;
     		 	  document.getElementById("Start_key").innerHTML = hangGame.dash;
           } 
     	  }
      
// If all the words are correctly gussed 

     	 if(word==hangGame.dash.toString().replace(/,/g,"")){
       //alert("you win");
        document.getElementById("game-loose").innerHTML ="<p>you win</p>";
        enableflag = false;
//Function to change the images  on pick of randon=m words  
        hangGame.getImage();
        hangGame.getSong();
     }

     if (word.indexOf(userGuess)<0 && hangGame.test.indexOf(userGuess)<0){
        hangGame.test.push(userGuess);
        console.log(hangGame.invalidcounter);
        hangGame.invalidcounter = hangGame.invalidcounter+1;
        //invalidcounter = invalidcounter-1;
        hangGame.counter=hangGame.counter - 1;
          if (word.length===hangGame.invalidcounter){
            document.getElementById("game-loose").innerHTML ="<p>you Loose</p>";
            enableflag = false;
            console.log(hangGame.counter);
            hangGame.invalidcounter=0;
            hangGame.test=[];
            // hangGame.counter=0;
           
        }
        
     }
               
    //Prining the gusessed words              
     document.getElementById("word-guess").innerHTML = hangGame.test;
     //printing the remmaning words on the screen              
     document.getElementById("word-remain").innerHTML =hangGame.counter;

  }  
 
 }
}



