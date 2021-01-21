import _ from 'lodash';

export type Matrix = number[][];

export const haveSameSize = (first: Matrix, second: Matrix): boolean =>
	(first.length === second.length) && (first[0].length === second[0].length);

export const add = (first: Matrix, second: Matrix): Matrix =>
	first.map((row, i) => row.map((num, j) => _.add(num, second[i][j])));

export const sum = (...matrices: Matrix[]): Matrix => matrices.reduce((total, current) => add(total, current));

export const toString = (matrix: Matrix): string => matrix.map(row => row.join('\t')).join('\n');

export const transpose = (matrix: Matrix): Matrix => matrix.map((row, i, array) => row.map((num, j) => array[j][i]));

export const negative = (matrix: Matrix): Matrix => matrix.map(row => row.map(num => -num));

const dropIndex = <T>(indexToDrop: number) => <T>(value: T, index: number): boolean => index !== indexToDrop;

export const minor = (
	matrix: Matrix,
	rowToDrop: number,
	colToDrop: number
): Matrix => matrix.filter(dropIndex(rowToDrop)).map(row => row.filter(dropIndex(colToDrop)));

export const determinant = (matrix: Matrix): number => matrix.length === 1 && matrix[0].length === 1
	? matrix[0][0] : matrix.reduce((total: number, row, i) => total + row[0] * adjunct(matrix, i, 0), 0);

export const adjunct = (
	matrix: Matrix,
	crossRow: number,
	crossCol: number
): number => (-1) ^ _.sum([crossRow, crossCol, 2]) * determinant(minor(matrix, crossRow, crossCol));

const matrix1: Matrix = [
	[1, 2, -4],
	[0, -9, 2],
	[1, 1, 1]
];

const matrix2: Matrix = [
	[0, -9, 4],
	[2, 3, 4],
	[1, -1, 1]
];

console.log(toString(minor(matrix1, 1, 1)));