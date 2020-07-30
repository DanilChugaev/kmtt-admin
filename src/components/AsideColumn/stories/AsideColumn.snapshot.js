/* global describe it expect page */
describe('AsideColumn', () => {
    it(`AsideColumn visually looks correct`, async() => {
        await page.goto(`http://localhost:9009/iframe.html?id=asidecolumn--asidecolumn`);
        await page.setViewport({ width: 800, height: 900 });
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
    });

    it(`AsideColumn with opened menu visually looks correct`, async() => {
        await page.goto(`http://localhost:9009/iframe.html?id=asidecolumn--asidecolumn`);
        await page.setViewport({ width: 800, height: 900 });
        await page.click('[class="head"]'); // открываем меню
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot();
    });
});
