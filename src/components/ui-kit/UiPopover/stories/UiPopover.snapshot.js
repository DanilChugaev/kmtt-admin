/* global describe it expect page */
describe('popovers', () => {
    it('Popovers visually looks correct', async() => {
        await page.goto(`http://localhost:9009/iframe.html?id=ui-kit--uipopover`);
        await page.click('[class="simple-activator"]'); // открываем попап
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
    });
});
