/*
 * Programming: 99 Bottles of Juice
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99; // when to start

while ( num > 0 /* your stop condition goes here */) { 
    if (num >= 3){       // check value of num
        decnum = num-1;
                        // print lyrics using num
        console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + decnum + " bottles of juice on the wall!");
    } else if (num ===2) {
        decnum = num-1;
                        // print lyrics using num
        console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + decnum + " bottle of juice on the wall!");
    } else {
        decnum = num-1;
        console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + decnum + " bottles of juice on the wall!");
    }
   
    // don't forget to check pluralization on the last line!
    num = num -1; // decrement num
}
