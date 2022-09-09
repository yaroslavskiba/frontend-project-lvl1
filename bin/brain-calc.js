#!/usr/bin/env node
import readlineSync from 'readline-sync';

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const arr = ['+', '-', '*'];
const randomOperator = (arr) => {
	return arr[Math.floor(Math.random()*arr.length)]
}

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
		const calculation = `${a} ${operator} ${b}`;
		console.log(`Question: ${calculation}`);
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
		}
		if (+userAnswer === result) {
			console.log('Correct!');
		} else {
			console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${result}"`);
			return console.log(`Let's try again, ${userName}`);
		}
	}
	return console.log(`Congratulations, ${userName}`);
}
calcNumber();