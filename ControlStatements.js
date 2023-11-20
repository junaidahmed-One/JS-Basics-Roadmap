//Question-1 :   WAP that checks if a variable x is greater than 10. If it is, log "x is greater than 10," otherwise, log "x is not greater than 10."

const x = 50;

if(x>10){
    console.log(`x is greater than 10`);
}else{
    console.log(`x is not greater than 10`);
}

//Question-2 :   WAP that check that if an user is illegible for drive a car or not ( take user age as input).

const age = 34;
//using terinary operator
(age>=18)? console.log(`Eligible to drive car`) : console.log(`Not Eligible to drive car`);

//Question-3:    WAP to assign grade for a student For example, if the score is between 90 and 100, assign the grade "A.", (take score of every subject as input).

const score = 7;

if(score >= 90 && score <= 100){
    console.log(`Grade A`);
}else if(score >= 70 && score < 90){
    console.log(`Grade B`);
}else if(score >= 60 && score < 70){
    console.log(`Grade C`);
}else if(score >=35 && score < 60){
    console.log(`Pass!`);
}else{
    console.log(`Fail!`)
}

//Question-4:   WAP to check  time of day based on the current hour. For example, if it's before noon, log "Good morning.". (take time as an input).

const time = 12;

if (time >= 0 && time < 12) {
    console.log("Good Morning");
}
else if (time >= 12 && time < 16) {
    console.log("Good Afternoon");
}
else if (time >= 16 && time < 20) {
    console.log("Good Evening");
}
else if (time >= 20 && time <= 24) {
    console.log("Good Night");
}
else {
    console.log("Please enter valid time!");
}

//Question-5:   WAP using Switch-case to display day name according to number, for eg: 1 => Sunday. (take a number as input).

const day = 6;

switch(day){
    case 1:
        console.log(`Sunday`);
        break;
    case 2:
        console.log(`Monday`);
        break;
    case 3:
        console.log(`Tuesday`);
        break;
    case 4:
        console.log(`Wednesday`);
        break;
    case 5:
        console.log(`Thursday`);
        break;
    case 6:
        console.log(`Friday`);
        break;
    case 7:
        console.log(`Saturday`);
        break;
    default:
        console.log(`Enter valid number`);
        break;
}

//Question-7:   Implement a switch case statement to determine the type of fruit based on a variable. Handle at least three different fruit options.

const fruit = "apple";

switch(fruit){
    case "apple":
        console.log(`Simple Fruit`);
        break;
    case "strawberry":
        console.log(`Aggregate Fruits`);
        break;
    case "pineapple":
        console.log(`Multiple Fruits`);
        break;
    default:
        console.log(`Case not handled!`);
        break;
}

//Question-10:  WAP to validate a username. If the username is less than 6 characters, log "Username too short"; if it's more than 15 characters, log "Username too long"; otherwise, log "Username accepted."

const username = "Ahmed";

if(username.length<6){
    console.log(`Username too short`);
}else if(username.length>15){
    console.log(`Username too long`);
}else{
    console.log(`Username accepted!`);
}