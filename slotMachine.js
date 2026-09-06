 let wallet= 500;
 let bet= 5;

const symbols= ["🍒", "🍀", "🎲", "♠️", "🎰"];
function spin(){      
    let bet= document.getElementById("bet").value;
    let reelNumberOne= randomSymbol();
    let reelNumberTwo= randomSymbol();
    let reelNumberThree= randomSymbol();
  
    wallet= wallet-bet;
    updateWallet();

    function updateWallet(){
    document.getElementById("wallet").innerHTML= wallet;
}
 
        document.getElementById("reelNumberOne").innerHTML= reelNumberOne;
        document.getElementById("reelNumberTwo").innerHTML= reelNumberTwo;
        document.getElementById("reelNumberThree").innerHTML= reelNumberThree;

    function randomSymbol(){
        let randomNum= Math.floor(Math.random()*5);
        return symbols[randomNum];
        }
        
        if (reelNumberOne===reelNumberTwo && reelNumberTwo===reelNumberThree) {
        let winningAmount= bet*2;

        wallet= wallet+winningAmount;
         updateWallet();

        document.getElementById("message").innerHTML="Yay! You won!";      
         }else{
        document.getElementById("message").innerHTML="Sorry! You lose!";       
        }
     }       
    
