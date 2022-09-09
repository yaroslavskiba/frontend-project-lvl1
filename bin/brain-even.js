#!/usr/bin/env node
import readlineSync from 'readline-sync';

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const evenNumber = () => {
	console.log('Welcome to the Brain Games!');
	const userName = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const random = randomNumber(0, 100);
    console.log(`Question: ${random}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if ((random % 2 === 0 && userAnswer === 'yes') || (random % 2 !== 0 && userAnswer === 'no')) {
			console.log('Correct!');
			continue;
    }
    if (random % 2 === 0 && userAnswer === 'no') {
      console.log('"no" is wrong answer ;(. Correct answer was "yes".');
      return console.log(`Let's try again, ${userName}`);
    }
    if (random % 2 !== 0 && userAnswer === 'yes') {
			console.log('"yes" is wrong answer ;(. Correct answer was "no".');
			return console.log(`Let's try again, ${userName}`);
    }
    if (userAnswer !== 'yes' || userAnswer !== 'no') {
      return console.log(`Let's try again, ${userName}`);
    }
  }
  return console.log(`Congratulations, ${userName}`);
};
evenNumber();
export default evenNumber;
