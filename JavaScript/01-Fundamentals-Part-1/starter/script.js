/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);
console.log("jonas");
console.log("23");
let firstName = "Matilda";
let first = "jonas"
let FirstNamePerson
let $function = 18;
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
let PI = 15226;
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';
let job1 = 'programmer';
let job2 = 'teacher';
console.log(myCurrentJob);
let jonas_matilda = 'JM';
let country = 'Nigeria';
let continent = 'Africa';
let population = 200000000;
console.log(country, continent, population);


let javascriptIsFun = true;
console.log(true);
console.log(typeof true);
console.log(typeof javascriptIsFun);

//console.log(typeof 23);
//console.log(typeof 'jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);
let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(typeof year);
console.log(typeof null);

let age = 30;
age = 31;
const birthYear = 1991;
birthYear = 1990;

const job;
var job = "programmer";
job = "teacher";
lastName = "Schmedtmann";
console.log(lastName);

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2** 3 means 2 to the power of 3= 2*2*2
const firstName = 'Jonas';
const lastName = "schmedtmann";
console.log(firstName + " " + lastName);
//Assignment operators
let x = 10 + 5;// 15
x += 10;// x= x + 10
x *= 4;// x= x*4
x++; //x=x+1
x--;
x--;
console.log(x);
// Comparison operators
console.log(ageJonas > ageSarah);//>,<,>=,<=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);
console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;// x=y=10,x=10
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);




//coding challenge 1

//const BMI=mass / height ** 2 =mass /(height*height)  //formula

// Data1

const mMass = 78;
const mHeight = 1.69;
const jMass = 92;
const jHeight = 1.95;
//using formula 1
const mBMI = mMass / mHeight ** 2;
const jBMI = jMass / jHeight ** 2;

//using formula 2
const mmBMI = mMass / (mHeight * mHeight);
const jjBMI = jMass / (jHeight * jHeight);
// soln for both formulas
console.log(mBMI, mmBMI, jBMI, jjBMI);

//Data2
const marksMass = 95;
const marksHeight = 1.88;
const johnsMass = 85;
const johnsHeight = 1.76;
//using formula 1 only
const marksMBI = marksMass / marksHeight ** 2;
const johnsMBI = johnsMass / johnsHeight ** 2;
const markHigherBMI = marksMBI > johnsMBIjnhjub
console.log(marksMBI, johnsMBI, markHigherBMI);

//First data
//const markHigherBMI = mBMI > jBMI
//console.log(markHigherBMI);

const firstName = "Jonas"
const job = "teacher"
const birthYear = 1991;
const year = 2037;
const jonas = "I'm " + firstName + ',a ' + (year - birthYear) + 'years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
console.log(jonasNew);
console.log(`Just a regular string...`);

console.log('string with \n\
multiple \n\
lines');

console.log("string text one one\n\ two three four five ")
console.log(`He's often called "Johnny"`)

const nuMM = 2030;
const nummm = 2080;
console.log(`This is it "already" ${nuMM * nummm}`);

const age = 15;
if (age >= 18) {
    console.log(' Sarah can start driving license🏎️ ');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young.Wait another ${yearsLeft} years :)`);
}
const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


const mMass = 78;
const mHeight = 1.69;
const jMass = 92;
const jHeight = 1.95;
//using formula 1
const mBMI = mMass / mHeight ** 2;
const jBMI = jMass / jHeight ** 2;
let solN = console.log(mBMI, jBMI);
let bmi;
if (mBMI > jBMI) {
    bmi = `Mark's BMI ${mBMI} is higher than John's ${jBMI}!`;
} else {
    bmi = `John's BMI ${jBMI} is higher than Mark's ${mBMI}`;
}
console.log(bmi);


//
//if (mBMI > jBMI) {
//  console.log(`Mark's BMI 28.3 is higher than John's 23.9!`);
//} else {
//  let jG = `John's BMI 23.9 is higher than Mark's `;

//} console.log(jG);
//

//const inputYear = '1991'
//console.log(Number)
//console.log(inputYear + 18);

//Type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

//Type coersion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);

// 5 falsy values; 0,'',undefined,null,NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 100;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log('you should get a job');
}

let height = 234;
if (height) {
    console.log('YAY Height is defined');
} else {
    console.log('Height is UNDEFINED');
}


const age = '18';
if (age === 18) console.log('you just became an adult(strict)');



if (age == 18) console.log('You just became an adult(loose)');

const favorite = Number(prompt("what's your favorite number"));
console.log(favorite);
console.log(typeof favorite);



if (favorite === 23) {
    console.log('COOL! 23 IS AN AMAZING NUMBER ');
} else if (favorite === 7) {
    console.log('7 is also a cool number');
} else if (favorite === 9) {
    console.log(' 9 is also a cool number');
} else {
    console.log('Number is not 23 0r 7');
}

if (favorite !== 23) console.log('why not 23');

const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('someone else should drive...');
// }

const isTired = false; //C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive..');
} else {
    console.log('someone else should drive...');
}


//Coding challenge 3

const dolphinsavgScore = 96 + 108 + 80 / 3;
const koalasavgScore = 88 + 91 + 110 / 3;
const minScore = 100;
console.log(dolphinsavgScore, koalasavgScore);

if (dolphinsavgScore > koalasavgScore) {
    console.log('Dolphins wins');
} else if (dolphinsavgScore === koalasavgScore) {
    console.log('Its a Draw');
} else if (dolphinsavgScore < koalasavgScore) {
    console.log('Koalas wins');
} else if (dolphinsavgScore && koalasavgScore === minScore);
console.log('yess');
*/
/* //Bonus 1
const dolphinsavgScore = (97 + 112 + 101) / 3;
const koalasavgScore = (109 + 95 + 123) / 3;
console.log(dolphinsavgScore, koalasavgScore);

if (dolphinsavgScore > koalasavgScore && dolphinsavgScore >= 100) {
} else if (dolphinsavgScore > koalasavgScore === 100) {
    console.log('Dolphins wins');
} else if (dolphinsavgScore === koalasavgScore && dolphinsavgScore >= 100 && dolphinsavgScore) {
    console.log('Its a Draw');
} else if (koalasavgScore > dolphinsavgScore && koalasavgScore >= 100) {
    console.log('Koalas wins');
} else {
    console.log('No one wins the trophy');
}
const day = 'Friday';

switch (day) {
    case 'Monday': // day==='monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'Tuesday':
        console.log('Prepare theory videos');
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('write code examples');
        break;
    case 'Friday':
        console.log('Record videos');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Enjoy the weekend😎');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'Monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'Tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'Wednesday' || day === 'Thursday') {
    console.log('write code examples');
} else if (day === 'Friday') {
    console.log('Record videos');
} else if (day === 'Saturday' || day === 'Sunday') {
    console.log('Enjoy the weekend😁');
} else {
    console.log('Not a valid day!');
}

3 + 4
1991
true && false && !false

if (23 > 10) {
    const str = '23 is bigger';
}
const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);


const age = 15;
age >= 18 ? console.log('I like to drink wine🍷') :
    console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);


let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
 */


//Coding challenge 4
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 :
    bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip} 
and the total value is ${bill + tip}`);






