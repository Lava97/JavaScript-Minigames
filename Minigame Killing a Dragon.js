var slaying = true
var youHit = Math.floor(Math.random() * 2); //This is to determine if you will hit the dragon or not. The answer will be 0 or 1, which evaluates to true or false.
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0
while(slaying) {
    if (youHit) {
        console.log("You hit the dragon!")
        totalDamage += damageThisRound
        if(totalDamage >= 4){
            console.log("You win!")
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
        }
    }
    else {
        console.log("You missed the dragon!")
    }
    slaying = false
}