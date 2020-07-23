/* global describe it expect page */
describe('Button', () => {
    /** Указываем названия страниц с компонентами (названия см. в UiButton.stories.js) через kebab-case */
    const buttons = [
        'simple-button',
        'disabled-button',
        'green-button',
        'red-button',
    ];

    buttons.forEach(button => {
        it(`${button} visually looks correct`, async() => {
            await page.goto(`http://localhost:9009/iframe.html?id=uibutton--${button}`);
            const image = await page.screenshot();

            expect(image).toMatchImageSnapshot();
        });
    })
});
