import { Key } from 'webdriverio'


describe("Test case 3", () => {

    it("should to search computer", async () => {
    await browser.url('https://github.com/');

    const SearchBtn = await $('span.flex-1')
    await SearchBtn.click()
    await browser.pause(2000)
    
    
    let InputSearch = await $("#query-builder-test")
    await InputSearch.addValue("computer")
    await browser.pause(2000)
    await browser.keys(Key.Enter)
    await browser.pause(4000)


    const resultAct = await $('a[href="/ossu/computer-science"]')
    await expect(resultAct).toHaveTextContaining('computer')
});
});