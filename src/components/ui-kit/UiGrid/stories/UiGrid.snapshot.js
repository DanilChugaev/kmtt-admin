/* global describe it expect page */
describe('grid', () => {
    it('Grid visually looks correct', async() => {
        await page.goto(`http://localhost:9009/iframe.html?id=ui-kit--uigrid`);
        await page.setViewport({ width: 1400, height: 1200 });
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
    });
});
