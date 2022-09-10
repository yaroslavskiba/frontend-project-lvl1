import readlineSync from 'readline-sync';

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomOperator = (arr) => arr[Math.floor(Math.random() * arr.length)];
const arr = ['+', '-', '*'];

const calcNumber = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    let result = 0;

    const a = randomNumber(0, 100);
    const b = randomNumber(0, 100);
    const operator = randomOperator(arr);

    console.log(`Question: ${a} ${operator} ${b}`);

    const userAnswer = readlineSync.question('Your answer: ');

    switch (operator) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      default:
    }

    if (+userAnswer === result) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${result}"`);
      return console.log(`Let's try again, ${userName}`);
    }
  }
  return console.log(`Congratulations, ${userName}`);
};
export default calcNumber;
