/* global describe it expect page */
describe('Button', () => {
    const buttons = [
        'simple-button',
        'with-color',
    ];

    buttons.forEach(button => {
        it(`${button} visually looks correct`, async() => {
            await page.goto(`http://localhost:9009/iframe.html?id=uibutton--${button}`);
            const image = await page.screenshot();

            expect(image).toMatchImageSnapshot();
        });
    })
});
