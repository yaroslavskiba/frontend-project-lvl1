// import readlineSync from 'readline-sync';

// const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// const randomOperator = (arr) => arr[Math.floor(Math.random() * arr.length)];
// const arr = ['+', '-', '*'];

// const calcNumber = () => {
//   console.log('Welcome to the Brain Games!');
//   const userName = readlineSync.question('May I have your name? ');
//   console.log(`Hello, ${userName}!`);

//   console.log('What is the result of the expression?');

//   for (let i = 0; i < 3; i += 1) {
//     let result = 0;

//     const a = randomNumber(0, 100);
//     const b = randomNumber(0, 100);
//     const operator = randomOperator(arr);

//     console.log(`Question: ${a} ${operator} ${b}`);

//     const userAnswer = readlineSync.question('Your answer: ');

//     switch (operator) {
//       case '+':
//         result = a + b;
//         break;
//       case '-':
//         result = a - b;
//         break;
//       case '*':
//         result = a * b;
//         break;
//       default:
//     }

//     if (+userAnswer === result) {
//       console.log('Correct!');
//     } else {
//       console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${result}"`);
//       return console.log(`Let's try again, ${userName}`);
//     }
//   }
//   return console.log(`Congratulations, ${userName}`);
// };
// export default calcNumber;

import brainlogic from '../src/index.js';
import random from './utils.js';

export const gameDescription = 'What is the result of the expression?';

const allSign = ['+', '-', '*'];
const rand = () => Math.floor(Math.random() * allSign.length);
const signrand = () => allSign[rand()];

export const question = () => {
  const n1 = random(1, 100);
  const n2 = random(1, 100);
  const sign = signrand();
  const expression = `${n1} ${sign} ${n2}`;
  return {
    expression, n1, n2, sign,
  };
};

export const correctanswer = ({ n1, n2, sign }) => {
  switch (sign) {
    case '+':
      return String(n1 + n2);

    case '-':
      return String(n1 - n2);

    default:
      return String(n1 * n2);
  }
};

const brainCalc = () => { brainlogic(gameDescription, question, correctanswer); };

export default brainCalc;
