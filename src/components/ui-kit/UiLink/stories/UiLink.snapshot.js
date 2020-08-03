/* global describe it expect page */
describe('links', () => {
    it('Links visually looks correct', async() => {
        await page.goto(`http://localhost:9009/iframe.html?id=ui-kit--uilink`);
        await page.setViewport({ width: 1700, height: 600 });
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
    });
});
