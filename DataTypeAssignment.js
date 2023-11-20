//https://gist.github.com/9520prashant/55f05f84ecf33c1edccaaf2eccfe256c

//Question-1 :   Input the distance in Kilometer and Convert into Meter and Centimeter.

const distance_in_km = 5;

function convertIntoMeter(distance_in_km){
    return distance_in_km * 1000;
}

function convertIntoCentimeter(distance_in_km){
    return distance_in_km*100000;
}

console.log(`Distance in Meter for ${distance_in_km}km : ${convertIntoMeter(distance_in_km)}m`);
console.log(`Distance in centimeter for ${distance_in_km}km : ${convertIntoCentimeter(distance_in_km)}cm`);

//Question-2:    WAP to input radius of a circle and log the area of circle.

const radius_of_circle = 12;

function areaOfCircle(radius_of_circle){
    return Math.PI*(radius_of_circle*radius_of_circle);
}

console.log(`Area of circle for radius ${radius_of_circle}: ${areaOfCircle(radius_of_circle)}`);

//Question-3:    WAP to input two numbers and perform arithmetic operations on those numbers.

const num1 = 10;
const num2 = 30;


function add(num1,num2){
    return num1+num2;
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}

console.log(`Addition of ${num1} & ${num2} = ${add(num1,num2)}`);
console.log(`Subtraction of ${num1} & ${num2} = ${subtract(num1,num2)}`);
console.log(`Multiplication of ${num1} & ${num2} = ${multiply(num1,num2)}`);
console.log(`Division of ${num1} & ${num2} = ${divide(num1,num2)}`);

//Question-4:    WAP to calculate total marks in two subject and then calculate percentage.

const subject1_marks = 70;
const subject2_marks = 90;

function totalMarkswithPercentage(subject1_marks,subject2_marks){
    const per = ((subject1_marks+subject2_marks)/200)*100;
    console.log(`Total marks in both subjects are = ${subject1_marks+subject2_marks}/200`);
    console.log(`Percentage is = ${per}%`);
}

totalMarkswithPercentage(subject1_marks,subject2_marks);

//Question-5:    WAP to input the length and breath of rectangle and calculate the area and perimeter of rectangle.

const length_of_rectangle = 3;
const breath_of_rectangle = 4;

function areaAndPerimeter(length_of_rectangle,breath_of_rectangle){
    const area = length_of_rectangle*breath_of_rectangle;
    const perimeter = 2*(length_of_rectangle+breath_of_rectangle);

    console.log(`Area of rectangle = ${area}`);
    console.log(`Perimeter of rectangle = ${perimeter}`);
}

areaAndPerimeter(length_of_rectangle,breath_of_rectangle);

// Question-6:    WAP to input n numbers and log the average of those number.

const n = [1,2,3,4,5,6,7,8];

function average(n){
    let sum = 0;
    for(let num of n){
        sum+=num;
    }

    return sum/n.length;
}

console.log(`Average ${average(n)}`);

//Question-7:WAP to input the distance between two cities (in km) , convert and print this distance in meter, feet, inches, and centimeter.

const distance_between_two_cities = 300;

function convertToMeter(distance_between_two_cities){
    return distance_between_two_cities * 1000;
}

function convertToCentimeter(distance_between_two_cities){
    return distance_between_two_cities*100000;
}

function convertToInches(distance_between_two_cities){
    return distance_between_two_cities * 39370.1;
}

function convertToFeet(distance_between_two_cities){
    return distance_between_two_cities*3280.84;
}

console.log(`Distance in Meter for ${distance_between_two_cities}km : ${convertToMeter(distance_between_two_cities)}m`);
console.log(`Distance in Centimeter for ${distance_between_two_cities}km : ${convertToCentimeter(distance_between_two_cities)}cm`);
console.log(`Distance in Inches for ${distance_between_two_cities}km : ${convertToInches(distance_between_two_cities)}in`);
console.log(`Distance in Feet for ${distance_between_two_cities}km : ${convertToFeet(distance_between_two_cities)}ft`);

//Question-8:    WAP to input the temperature in Fahrenheit and convert this temperature in Centigrade.

const temperature_in_fahrenheit = 100;

function convertToCentigrade(temperature_in_fahrenheit){
    return (temperature_in_fahrenheit-32)*5/9;
}

console.log(`Temperature in Centigrade ${convertToCentigrade(temperature_in_fahrenheit)}`);

//Question-9:Input the quantity and rate of a product then calculate the amount. A discount of 10 % after then calculate discount amount and amount after discount.

const quantity = 2;
const rate = 100;

const discount = 0.10;
let totalRate = 0;
function discountedAmount(quantity,rate,discount){
    totalRate = quantity*rate;
    const discountAmount = totalRate * discount;
    return discountAmount;
}

function finalAmount(quantity,rate,discount){
    const disamount = discountedAmount(quantity,rate,discount);
    return totalRate-disamount;
}

console.log(`Total Quantity ${quantity}\nRate of the Product ${rate}\nDiscount of ${discount*100}%\nDiscounted amount is ${discountedAmount(quantity,rate,discount)}`);
console.log(`Final amount for the discount of ${discount*100}% is ${finalAmount(quantity,rate,discount)}`);

//Question-10:    Input principal amount, input rate of interest, input number of years, Then Calculate simple interest.

const principal_amount = 2000;
const rate_of_interest = 20;
const number_of_years = 5;

function simpleInterest(principal_amount,rate_of_interest,number_of_years){
    const rate = rate_of_interest/100;
    return principal_amount*(1+rate*number_of_years);
}

console.log(`Simple Interest is ${simpleInterest(principal_amount,rate_of_interest,number_of_years)}`);

