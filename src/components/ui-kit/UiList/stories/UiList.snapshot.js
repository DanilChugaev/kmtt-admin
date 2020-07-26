/* global describe it expect page */
describe('list', () => {
    it('List visually looks correct', async() => {
        await page.goto(`http://localhost:9009/iframe.html?id=ui-kit--uilist`);
        await page.setViewport({ width: 800, height: 1000 });
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
    });
});
