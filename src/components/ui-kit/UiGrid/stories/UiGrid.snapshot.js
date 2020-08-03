/* global describe it expect page */
describe('grid', () => {
    it('Grid visually looks correct', async() => {
        await page.goto(`http://localhost:9009/iframe.html?id=ui-kit--uigrid`);
        await page.setViewport({ width: 1700, height: 1200 });
        await page.click('[class="activator"]');
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
    });
});
