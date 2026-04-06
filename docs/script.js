// ==========================
// Part 1: Date Display
// ==========================

// 1. Create a Date object
const today = new Date();

// 2. Get the current month, day, and year
// 3. Adjust month if needed (JavaScript months are 0-based)
const month = today.getMonth() + 1;
const day = today.getDate();
const year = today.getFullYear();

// 4. Add leading zeros to month/day if needed
const formattedMonth = month < 10 ? "0" + month : month;
const formattedDay = day < 10 ? "0" + day : day;

// 5. Create a string in the format: "Today is MM/DD/YYYY"
const dateMessage = "Today is " + formattedMonth + "/" + formattedDay + "/" + year;

// 6. Display the result in the element with id="dateOutput"
document.getElementById("dateOutput").textContent = dateMessage;


// ==========================
// Part 2: Number Conversion
// ==========================

// 1. Create at least 4 separate variables:
//    - at least 2 numeric strings (example: "42")
//    - at least 1 decimal string (example: "19.75")
//    - at least 1 non-numeric string (example: "hello")
const valueA = "42";
const valueB = "19.75";
const valueC = "hello";
const valueD = "100";

// 2. For EACH variable:
//    a. Convert the value using Number()
//    b. Check if it is NaN using Number.isNaN()
//    c. Check if it is an integer using Number.isInteger()
const convertedA = Number(valueA);
const isNanA = Number.isNaN(convertedA);
const isIntA = Number.isInteger(convertedA);

const convertedB = Number(valueB);
const isNanB = Number.isNaN(convertedB);
const isIntB = Number.isInteger(convertedB);

const convertedC = Number(valueC);
const isNanC = Number.isNaN(convertedC);
const isIntC = Number.isInteger(convertedC);

const convertedD = Number(valueD);
const isNanD = Number.isNaN(convertedD);
const isIntD = Number.isInteger(convertedD);

// 3. For EACH value, create a sentence showing:
//    - original value
//    - converted value
//    - whether it is NaN
//    - whether it is an integer
const resultA = "Original: '" + valueA + "' -> Converted: " + convertedA +
  " -> isNaN: " + isNanA + " -> isInteger: " + isIntA;

const resultB = "Original: '" + valueB + "' -> Converted: " + convertedB +
  " -> isNaN: " + isNanB + " -> isInteger: " + isIntB;

const resultC = "Original: '" + valueC + "' -> Converted: " + convertedC +
  " -> isNaN: " + isNanC + " -> isInteger: " + isIntC;

const resultD = "Original: '" + valueD + "' -> Converted: " + convertedD +
  " -> isNaN: " + isNanD + " -> isInteger: " + isIntD;

// ==========================
// Part 4: Conditionals
// ==========================

// 1. Write at least TWO if/else statements
// check if a value is NaN
let messageC = "";
if (isNanC === true) {
  messageC = " This value is not a valid number.";
} else {
  messageC = " This value is a valid number.";
}

// check if a number is an integer
let messageA = "";
if (isIntA === true) {
  messageA = " This value is an integer.";
} else {
  messageA = " This value is not an integer.";
}

// 4. Combine all your results into ONE string
// 5. Display the final result inside the element: id="numberConversionOutput"
const conversionHTML =
  "<p>" + resultA + messageA + "</p>" +
  "<p>" + resultB + "</p>" +
  "<p>" + resultC + messageC + "</p>" +
  "<p>" + resultD + "</p>";

document.getElementById("numberConversionOutput").innerHTML = conversionHTML;


// ==========================
// Part 3: Math & Formatting
// ==========================

// 1. Create at least 2-3 numeric variables
const itemPrice = 49.99;
const taxRate = 0.08;
const shippingCost = 5.95;

// 2. Perform calculations:
//    - at least one addition
//    - at least one other operation (subtract, multiply, or divide)
const subtotal = itemPrice;
const taxAmount = itemPrice * taxRate;
const totalCost = subtotal + taxAmount + shippingCost;

// 3. Use at least ONE of the following: toFixed()
const formattedSubtotal = subtotal.toFixed(2);
const formattedTax = taxAmount.toFixed(2);
const formattedTotal = totalCost.toFixed(2);

// 4. Build a string showing your results
// 5. Display the results inside the element with id="mathOutput"
const mathHTML =
  "<p>Item Price: $" + formattedSubtotal + "</p>" +
  "<p>Tax (8%): $" + formattedTax + "</p>" +
  "<p>Shipping: $" + shippingCost.toFixed(2) + "</p>" +
  "<p><strong>Total: $" + formattedTotal + "</strong></p>";

document.getElementById("mathOutput").innerHTML = mathHTML;
