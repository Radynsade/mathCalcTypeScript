import { Matrix } from './types';

export const sum = (...args: number[]): number => args.reduce((total, current) => total + current);

type IOverload = {
	(param: number): number[];
	(param: object): object[];
}

const overloadedArrowFunc: IOverload = (param: any) => {
	return [param, param];
}

export namespace MatrixOperations {
	export const equalSize = (first: Matrix, second: Matrix): boolean =>
		(first.length === second.length) && (first[0].length === second[0].length);

	export const sum = (first: Matrix, second: Matrix): Matrix =>
		first.map((row, i) => row.map((num, j) => num + second[i][j]));
}


let val = overloadedArrowFunc(4);

console.log(41)
console.log(val);

// type Create = {
// 	(): number;
// 	<T>(x: T): T[];
// 	<T>(x: T, y: T): T[];
// };

// const create: Create = <T>(
// 	x?: T,
// 	y?: T
// ) => ({
// 	x: x ?? 0,
// 	y: y ?? x ?? 0,
// });

// export function sum(...args: number[]): number =>

// export const sum = (...args: Matrix[]): Matrix =>

// export const sum = <T extends number | Matrix>(...args: T[]): T extends number ? number : Matrix =>
// 	args.reduce((sum: , current) => );

// export const sume = (...args: number[] | Matrix[]) =>
// 	args.reduce((sum: number[] | Matrix[], current: number[] | Matrix[]) =>
// 		sum + current
// 	);

// export const multiply = (...args: (number | Matrix)[]) =>
// 	args.reduce((product, current) => product * current);
