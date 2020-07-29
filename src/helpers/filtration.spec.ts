// @ts-ignore
import { expect } from 'chai';

// @ts-ignore
import filtration from './filtration.ts';

describe('filtration.ts', () => {
    const testCases = [
        {
            name: 'Должен отфильтровать по текстовому значению',
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
                searchQuery: 'Bob Stone',
            },
            expected: [
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
            name: 'Должен отфильтровать по числовому значению',
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
                searchQuery: '56723',
            },
            expected: [
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
            name: 'Должен вернуть пустой список, если никакое значение не совпадает',
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
                searchQuery: 'Какое то другое слово',
            },
            expected: [],
        },
        {
            name: 'Должен вернуть исходный список, если строка поиска пустая',
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
                searchQuery: '',
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
    ];

    testCases.forEach(({ name, input: { rows, searchQuery }, expected }) => {
        it(`${name}`, () => {
            expect(filtration(rows, searchQuery)).to.deep.equal(expected);
        });
    })
});
