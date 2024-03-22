'use strict';

import { WriteStream, createWriteStream } from 'fs';
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function (inputStdin: string): void {
	inputString += inputStdin;
});

process.stdin.on('end', function (): void {
	inputLines = inputString.split('\n');
	inputString = '';

	main();
});

function readLine(): string {
	return inputLines[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr: number[][]): number {
	const n = arr.length;

	let pointer = n - 1;

	let diag1 = 0;
	let diag2 = 0;

	for (let i = 0; i < n; i++) {
		diag1 += arr[i][i];
		diag2 += arr[i][pointer];
		pointer = pointer - 1;
	}

	return Math.abs(diag1 - diag2);
}

function main() {
	const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

	const n: number = parseInt(readLine().trim(), 10);

	let arr: number[][] = Array(n);

	for (let i: number = 0; i < n; i++) {
		arr[i] = readLine()
			.replace(/\s+$/g, '')
			.split(' ')
			.map((arrTemp) => parseInt(arrTemp, 10));
	}

	const result: number = diagonalDifference(arr);

	ws.write(result + '\n');

	ws.end();
}
