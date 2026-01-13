ADVANCED LOOP
Qn-1 prime number
At first,we take a number and assume it is prime.
If the number is less than or eqal to 1,it cannot be prime,so we mark it as not prime.
Then we use a loop starting from 2 up to one number before the given number 7.Inside the loop,we check if the number is divisible by any value.
If the number gets divided completely by any value,it means the number has more than two factors,so it is not prime number.We stop the loop immediately using break.
Finally we print wether the number is prime or not.

Qn-2 reverse number
We start with a number and an empty variable called reverse to store the veresed value.
Using a while loop,we take the last digit of number using % 10.Then we add that digit to reverse variable after shifting existing digits to the left.
After that,we revome the last digit from the number by dividing it by 10 and using Math.floor().
This process continues until the number becomes zero.Finally,we print the reversed number.

Qn-3count digits in a number
At first, we take a number and initialize a counter variable with zero.
Using while loop,we remove one digit at a time by dividing the number by 10.Everytime we remove a digit,we increase the counter by one.
When the number becomes zero,the loop stops and the counter contains the total number of digits in the number.

Qn-4Fibonacci series
At first we start with two variables a=0 b=1 ,they are the first two fibonacci numbers.
Then we use loop to calculate the next numbers.Each new number is obtained by adding the previous two numbers.
After printing the new numbers,we update the values of a and b so that the process can continue.
Loop runs until we get the required number of fibonacci terms.

Qn-5 square test pattern
We use nested loops,The outer loops control the number of rows.The inner loop controls the number of star in each row.
For every row,we create a string and keep adding stars using the inner loop.
After finishing one row,we print it and move to the next line.

Qn-6 increasing star pattern
We use nested loops.the outer loop decide the row number and inner loop prints star equal to the current row number.
So Row 1:1star,Row 2:2star,Row 3:3star This continue until the last row.
