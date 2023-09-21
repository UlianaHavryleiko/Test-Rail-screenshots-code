import { expect } from '@wdio/globals'

describe("Test case 2", () => {

    it("should to check teaser button", async () => {
    await browser.url('https://github.com/');
    await browser.pause(2000)
   
    const GHUniverseButton = await $('div.text-semibold.lh-condensed')
    let displayedInViewport = await GHUniverseButton.isDisplayedInViewport()
    console.log("Is gh Universe button displayed in viewport: " + displayedInViewport) // outputs: true
    await GHUniverseButton.click()
    await browser.pause(2000)

    const TeaserButton = await $('//*[@id="start-of-content"]/div/section[1]/div/div[1]/div/span')
    let displayed = await TeaserButton.isDisplayed()
    console.log("Is displayed: " + displayed) // outputs: true
    await TeaserButton.click()
    await browser.pause(4000)

});
});