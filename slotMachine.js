 let wallet = 500;
 let bet = 5;

    const symbols = ["🍒", "🍀", "🎲", "♠️", "🎰"];
    function spin() {
            let reelNumberOne = randomSymbol();
            let reelNumberTwo = randomSymbol();
            let reelNumberThree = randomSymbol();

        
    wallet = wallet - bet;

            updateWallet();

            document.getElementById("reelNumberOne").textContent = reelNumberOne;
            document.getElementById("reelNumberTwo").textContent = reelNumberTwo;
            document.getElementById("reelNumberThree").textContent = reelNumberThree;

        function randomSymbol() {

            let randomNumber = Math.floor(Math.random() * symbols.length);
             return symbols[randomNumber];
        }
        
            if (reelNumberOne === reelNumberTwo && reelNumberTwo === reelNumberThree) {
                let winningAmount = bet * 2;

                wallet = wallet + winningAmount;
                updateWallet();
                document.getElementById("message").textContent =
                    "Yay! You won!";
                } else {
                document.getElementById("message").textContent =
                    "Sorry, try again!";
            }
        }       
         function updateWallet() {
            
         }