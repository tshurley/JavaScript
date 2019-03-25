/*
 * Programming: Countdown, Liftoff! 
 * 
 * Using a while loop, print out the countdown output above.
 */

x = 60; //starts

while (x >= 0 ){ //stop condition
    
    if (x > 51){
    console.log("T-" + x + " seconds");        
    } else if (x === 50){
    console.log("Orbiter transfers from ground to internal power");        
    } else if (x > 32){
    console.log("T-" + x + " seconds");        
    } else if (x === 31){
    console.log("Ground launch sequencer is go for auto sequence start");        
    } else if (x > 17){
    console.log("T-" + x + " seconds");  
    } else if (x === 16){
    console.log("Activate launch pad sound suppression system");        
    } else if (x > 11){
    console.log("T-" + x + " seconds");  
    } else if (x === 10){
    console.log("Activate main engine hydrogen burnoff system");        
    } else if (x > 7){
    console.log("T-" + x + " seconds");  
    } else if (x === 6){
    console.log("Main engine start"); 
    } else if (x > 0){
    console.log("T-" + x + " seconds"); 
    } else
    console.log("Solid rocket booster ignition and liftoff!");
    
    x--; // decrement num
}
