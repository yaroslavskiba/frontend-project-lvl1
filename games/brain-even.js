// import readlineSync from 'readline-sync';

// const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// const evenNumber = () => {
//   console.log('Welcome to the Brain Games!');
//   const userName = readlineSync.question('May I have your name? ');
//   console.log(`Hello, ${userName}!`);
//   console.log('Answer "yes" if the number is even, otherwise answer "no".');
//   for (let i = 0; i < 3; i += 1) {
//     let result = '';

//     const random = randomNumber(0, 100);

//     if (random % 2 === 0) {
//       result = 'yes';
//     } else {
//       result = 'no';
//     }

//     console.log(`Question: ${random}`);

//     const userAnswer = readlineSync.question('Your answer: ');

//     if (userAnswer === result) {
//       console.log('Correct!');
//     } else {
//       console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.`);
//       return console.log(`Let's try again, ${userName}`);
//     }
//   }
//   return console.log(`Congratulations, ${userName}`);
// };
// export default evenNumber;

import brainlogic from '../src/index.js';
import random from './utils.js';

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export const question = () => {
  const n1 = random(1, 100);

  const expression = `${n1}`;
  return {
    n1, expression,
  };
};

export const correctanswer = ({ n1 }) => {
  if (n1 % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const brainEven = () => { brainlogic(gameDescription, question, correctanswer); };

export default brainEven;
