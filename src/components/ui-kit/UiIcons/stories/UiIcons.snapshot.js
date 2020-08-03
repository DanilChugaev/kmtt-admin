/* global describe it expect page */
describe('Icons', () => {
    it('Icons visually looks correct', async() => {
        await page.goto(`http://localhost:9009/iframe.html?id=ui-kit--uiicons`);
        await page.setViewport({ width: 1700, height: 1700 });
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
    });
});
