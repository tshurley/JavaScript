/*
 * Programming: Find my Seat
 * 
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0 
 * The last row-seat combination will be 25-99
 * 
 * Things to note: 
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

let seatAssignment = 0;

for (let row = 0; row <= 25; row++){
    for (let seat = 0; seat <= 99; seat++){
        console.log(seatAssignment + "-" + seat);
    }
    seatAssignment = row + 1;
}
