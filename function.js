// 1. Function to greet user
function greetUser(name) {
    return "Hello, " + name + "! Welcome to JavaScript.";
}

console.log(greetUser("Ayumi"));


// 2. Function to calculate area of rectangle
function calculateArea(length, width) {
    return length * width;
}

console.log(calculateArea(5, 8)); // Test


// 3. Function to check even or odd
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(10));
console.log(isEven(7));


// 4. Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(25));


// 5. Function to find maximum number in an array
function findMax(numbers) {
    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
console.log(findMax([3, 7, 2, 9, 1]));

// 6. Function to reverse a string
function reverseString(text) {
    let reversed = "";

    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }

    return reversed;
}

console.log(reverseString("hello"));


// 7. Function to create username
function createUsername(firstName, lastName = "User") {
    return (firstName + "_" + lastName).toLowerCase();
}

console.log(createUsername("Ayumi", "Aisha"));
console.log(createUsername("Sita"));


// 8. Function with callback
function applyOperation(num1, num2, operation) {
    return operation(num1, num2);
}

// Example callback functions
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log(applyOperation(5, 3, add));
console.log(applyOperation(5, 3, multiply));


// 9. Function to filter adults (18 or above)
function filterAdults(ages) {
    return ages.filter(function(age) {
        return age >= 18;
    });
}
console.log(filterAdults([12, 18, 25, 16, 30]));


// 10. Function to calculate grade
function calculateGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(calculateGrade(85));


// 11. Function to check palindrome
function isPalindrome(text) {
    let cleanText = text.toLowerCase().replace(/\s/g, "");
    let reversedText = cleanText.split("").reverse().join("");
    return cleanText === reversedText;
}
console.log(isPalindrome("text"));
console.log(isPalindrome("HI"));
