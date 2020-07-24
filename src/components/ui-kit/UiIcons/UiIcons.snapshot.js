/* global describe it expect page */
describe('Icons', () => {
    it('Icons visually looks correct', async() => {
        await page.goto(`http://localhost:9009/iframe.html?id=uiicons--icons`);
        await page.setViewport({ width: 800, height: 1300 });
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
    });
});
