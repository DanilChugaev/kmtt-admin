/* global describe it expect page */
describe('Button', () => {
    it(`Buttons visually looks correct`, async() => {
        await page.goto(`http://localhost:9009/iframe.html?id=ui-kit--uibutton`);
        await page.setViewport({ width: 1700, height: 600 });
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
    });
});
