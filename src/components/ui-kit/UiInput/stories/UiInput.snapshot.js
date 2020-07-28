/* global describe it expect page */
describe('inputs', () => {
    it('Inputs visually looks correct', async() => {
        await page.goto(`http://localhost:9009/iframe.html?id=ui-kit--uiinput`);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
    });
});
