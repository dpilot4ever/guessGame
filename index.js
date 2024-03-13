document.addEventListener("DOMContentLoaded", function () {
    // Get your guess number from the input value
    const inputVal = document.getElementById("input");

    // Get your button element
    const inputButton = document.querySelector(".btn");

    // actual guess
    const actualGuess = 10;

    // Track the number of guesses
    let remainingChances = 5;

    // Check if guess is the same as the user's guess
    function checkGuess(userGuess, actual) {
        if (userGuess !== "" && !isNaN(userGuess) ) {
            remainingChances--;

            if (Number(userGuess) === actual) {
                alert("Correct guess! Your head dey there");
            } else {
                alert(`Wrong guess! You have ${remainingChances} chances left.`);
            }

            if (remainingChances === 0) {
                alert(`Game over! The correct number was ${actual}`);
                // You might want to reset the game here.
                inputButton.disabled = true; // Disable the button after 5 attempts
            }
        } 
        
     
    }

    inputButton.addEventListener("click", function () {
        checkGuess(inputVal.value, actualGuess);
    });
});



// // inputButton.addEventListener("click",function(e){
// //     e.preventDefault()
// //     alert(inputVal.value)
// // })


// // function displayVal(){
    
// //    alert(inputVal.value)
// //  }
// // inputButton.addEventListener("click",displayVal)

// // ============================================================================

// // Get your guess number from the the input value
// const inputVal = document.querySelector("input")

// // Get your button element
// const inputButton = document.getElementsByClassName("btn")[0]

// // Generate a guess
// const actualGuess = 10
// // check if guess is the same with user guess
// function checkGuess(userGuess, actual){
        

//     if (userGuess.length > 0){
//         if (Number(userGuess) === actualGuess){
//             alert("Correct guess, your head dey there");
//         }
//         else if (userGuess !== actualGuess){
//             alert("Please Try again  ");
//         }
//         return
//     }
//     alert("input is empty")
   
// }

// inputButton.addEventListener("click", function(){
//     checkGuess(inputVal.value, actualGuess);
// });

// // if gues is the same, user wins
// // Else if guess is not the same, user loses




// // function Add(a, b){
// //     return a + b
// // }

// // console.log(Add(10,60))
// // console.log(Add(16,30))



