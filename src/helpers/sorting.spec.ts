// @ts-ignore
import { expect } from 'chai';

9// @ts-ignore
import sorting from './sorting.ts';

describe('sorting.ts', () => {
    const testCases = [
        {
            name: 'Должен отсортировать по возрастанию значений одного из ключа',
            input: {
                rows: [
                    {
                        'ID': { title: '789' },
                        'Имя': { title: 'Bob Stone' },
                        'Email': { title: 'bobstone.greatsoul@gmail.com' },
                        'Статус': { title: 'Неактивен' },
                        'Действия': { title: 'Действие' },
                    },
                    {
                        'ID': { title: '56723' },
                        'Имя': { title: 'Alex Stone' },
                        'Email': { title: 'alexstone.greatsoul@gmail.com' },
                        'Статус': { title: '✅ Активен' },
                        'Действия': { title: 'Действие' },
                    },
                ],
                sortKey: 'ID',
                sortOrder: 1,
            },
            expected: [
                {
                    'ID': { title: '56723' },
                    'Имя': { title: 'Alex Stone' },
                    'Email': { title: 'alexstone.greatsoul@gmail.com' },
                    'Статус': { title: '✅ Активен' },
                    'Действия': { title: 'Действие' },
                },
                {
                    'ID': { title: '789' },
                    'Имя': { title: 'Bob Stone' },
                    'Email': { title: 'bobstone.greatsoul@gmail.com' },
                    'Статус': { title: 'Неактивен' },
                    'Действия': { title: 'Действие' },
                },
            ],
        },
        {
            name: 'Должен отсортировать по убыванию значений одного из ключа',
            input: {
                rows: [
                    {
                        'ID': { title: '56723' },
                        'Имя': { title: 'Alex Stone' },
                        'Email': { title: 'alexstone.greatsoul@gmail.com' },
                        'Статус': { title: '✅ Активен' },
                        'Действия': { title: 'Действие' },
                    },
                    {
                        'ID': { title: '789' },
                        'Имя': { title: 'Bob Stone' },
                        'Email': { title: 'bobstone.greatsoul@gmail.com' },
                        'Статус': { title: 'Неактивен' },
                        'Действия': { title: 'Действие' },
                    },
                ],
                sortKey: 'ID',
                sortOrder: -1,
            },
            expected: [
                {
                    'ID': { title: '789' },
                    'Имя': { title: 'Bob Stone' },
                    'Email': { title: 'bobstone.greatsoul@gmail.com' },
                    'Статус': { title: 'Неактивен' },
                    'Действия': { title: 'Действие' },
                },
                {
                    'ID': { title: '56723' },
                    'Имя': { title: 'Alex Stone' },
                    'Email': { title: 'alexstone.greatsoul@gmail.com' },
                    'Статус': { title: '✅ Активен' },
                    'Действия': { title: 'Действие' },
                },
            ],
        },
        {
            name: 'Должен вернуть исходный массив, если он уже отсортирован',
            input: {
                rows: [
                    {
                        'ID': { title: '56723' },
                        'Имя': { title: 'Alex Stone' },
                        'Email': { title: 'alexstone.greatsoul@gmail.com' },
                        'Статус': { title: '✅ Активен' },
                        'Действия': { title: 'Действие' },
                    },
                    {
                        'ID': { title: '789' },
                        'Имя': { title: 'Bob Stone' },
                        'Email': { title: 'bobstone.greatsoul@gmail.com' },
                        'Статус': { title: 'Неактивен' },
                        'Действия': { title: 'Действие' },
                    },
                ],
                sortKey: 'ID',
                sortOrder: 1,
            },
            expected: [
                {
                    'ID': { title: '56723' },
                    'Имя': { title: 'Alex Stone' },
                    'Email': { title: 'alexstone.greatsoul@gmail.com' },
                    'Статус': { title: '✅ Активен' },
                    'Действия': { title: 'Действие' },
                },
                {
                    'ID': { title: '789' },
                    'Имя': { title: 'Bob Stone' },
                    'Email': { title: 'bobstone.greatsoul@gmail.com' },
                    'Статус': { title: 'Неактивен' },
                    'Действия': { title: 'Действие' },
                },
            ],
        },
    ];

    testCases.forEach(({ name, input: { rows, sortKey, sortOrder }, expected }) => {
        it(`${name}`, () => {
            expect(sorting(rows, sortKey, sortOrder)).to.deep.equal(expected);
        });
    })
});
