// @ts-ignore
import { expect } from 'chai';

// @ts-ignore
import getDynamicProp from './getDynamicProp.ts';

describe('getDynamicProp.ts', () => {
    const testCases = [
        {
            name: 'Возвращает значение динамической пропсы',
            input: {
                dynamicProps: {
                    to: '/index'
                },
                prop: '/default',
                propName: 'to',
            },
            expected: '/index',
        },
        {
            name: 'Возвращает значение статической пропсы',
            input: {
                dynamicProps: undefined,
                prop: '/default',
                propName: 'to',
            },
            expected: '/default',
        },
    ];

    testCases.forEach(({ name, input: { dynamicProps, prop, propName }, expected }) => {
        it(`${name}`, () => {
            expect(getDynamicProp(dynamicProps, prop, propName)).to.deep.equal(expected);
        });
    })
});
