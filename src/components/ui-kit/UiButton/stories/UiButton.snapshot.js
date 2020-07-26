/* global describe it expect page */
describe('Button', () => {
    it(`Buttons visually looks correct`, async() => {
        await page.goto(`http://localhost:9009/iframe.html?id=ui-kit--uibutton`);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
    });
});
