/* global describe it expect page */
describe('popovers', () => {
    it('Popovers visually looks correct', async() => {
        await page.goto(`http://localhost:9009/iframe.html?id=ui-kit--uipopover`);
        await page.setViewport({ width: 1500, height: 700 });
        await page.click('[class="simple-activator"]'); // открываем попап
        await page.click('[class="full-width-activator"]'); // открываем попап
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
    });
});
