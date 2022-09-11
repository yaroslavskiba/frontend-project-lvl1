// import readlineSync from 'readline-sync';

// const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// const gcd = () => {
//   console.log('Welcome to the Brain Games!');
//   const userName = readlineSync.question('May I have your name? ');
//   console.log(`Hello, ${userName}!`);
//   console.log('Find the greatest common divisor of given numbers.');
//   for (let i = 0; i < 3; i += 1) {
//     let result = 0;

//     let a = randomNumber(0, 50);
//     let b = randomNumber(0, 50);
//     console.log(`Question: ${a} ${b}`);

//     const userAnswer = readlineSync.question('Your answer: ');

//     for (; a !== b;) {
//       if (a > b) {
//         a -= b;
//       } else {
//         b -= a;
//       }
//     }
//     result = a;
//     if (+userAnswer === result) {
//       console.log('Correct!');
//     } else {
//       console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.`);
//       return console.log(`Let's try again, ${userName}`);
//     }
//   }
//   return console.log(`Congratulations, ${userName}`);
// };
// export default gcd;

import brainlogic from '../src/index.js';
import random from './utils.js';

export const gameDescription = 'Find the greatest common divisor of given numbers.';

export const question = () => {
  const n1 = random(1, 100);
  const n2 = random(1, 100);
  const expression = `${n1} ${n2}`;
  return { n1, n2, expression };
};

export const correctanswer = ({ n1, n2 }) => {
  const min = (n1 < n2) ? n1 : n2;
  const max = (n1 > n2) ? n1 : n2;
  let result = '';

  for (let i = min; result !== i; i -= 1) {
    if (min % i === 0) {
      if (max % i === 0) {
        result = i;
        break;
      }
    }
  }
  return String(result);
};

const brainGcd = () => { brainlogic(gameDescription, question, correctanswer); };

export default brainGcd;
