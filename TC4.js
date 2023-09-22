import { expect } from '@wdio/globals'

describe("Test case 4", () => {

    it("should to check template", async () => {
    await browser.url('https://github.com/');
    await browser.pause(2000)
   
    const GHUniverseButton = await $('div.text-semibold.lh-condensed')
    let displayedInViewport = await GHUniverseButton.isDisplayedInViewport()
    console.log("Is gh Universe button displayed in viewport: " + displayedInViewport) // outputs: true
    await GHUniverseButton.click()
    await browser.pause(2000)

    const WhyAttendButton = await $('a[href="https://reg.githubuniverse.com/flow/github/universe23/about/page/whyattend"]')
    let displayed = await WhyAttendButton.isDisplayed()
    console.log("Is displayed: " + displayed) // outputs: true
    await WhyAttendButton.click()
    await browser.pause(2000)

    const headerWhat = await $('.keep-bullets h1')
    await expect(headerWhat).toHaveText("What’s to love about GitHub Universe 2023?")


    await browser.maximizeWindow()

    const GetInspired = await $('div:nth-child(3)  h3:nth-child(17) > span > strong')
    await GetInspired.scrollIntoView()
    await browser.pause(2000)
    
    const templateBtn = await $('a[href="https://static.rainfocus.com/github/universe23/static/staticfile/staticfile/Persuade%20Your%20Boss_1691623195585001MLXi.pdf"]')
    await templateBtn.click()
    await browser.pause(2000)

});
});