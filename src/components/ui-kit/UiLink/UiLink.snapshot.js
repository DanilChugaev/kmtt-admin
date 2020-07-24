/* global describe it expect page */
describe('links', () => {
    it('Links visually looks correct', async() => {
        await page.goto(`http://localhost:9009/iframe.html?id=uilink--links`);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
    });
});
