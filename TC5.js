import { expect } from '@wdio/globals'

describe("Test case 5", () => {


    it("should to check fuctionality", async () => {
    await browser.url('https://github.com/');
    await browser.maximizeWindow()
    await browser.pause(2000)

    
    const Copilotbtn = await $('card-skew [href="/features/copilot"]')
    await Copilotbtn.scrollIntoView()
    await browser.pause(2000)
    const Discoverbtn = await $('card-skew [href="/features/actions"]')
    let isEnabled = await Discoverbtn.isEnabled()
    console.log("Is discover button enabled: " + isEnabled) // outputs: true
    await Discoverbtn.click()
    await browser.pause(2000)

    const Discussionsbtn = await $('main a[href="/features/discussions"]')
    let displayedInViewport = await Discussionsbtn.isDisplayedInViewport()
    console.log("Is discussion button displayed in viewport: " + displayedInViewport) // outputs: true
    await Discussionsbtn.click()
    await browser.pause(2000)

    const EnableDiscussionsbtn = await $('div.pt-10.pb-4.pb-md-7.d-flex.flex-column.flex-lg-column.flex-items-center.text-center [href="https://docs.github.com/en/discussions/quickstart"]')
    let displayedInViewport2 = await EnableDiscussionsbtn.isDisplayedInViewport()
    console.log("Is discussion button displayed in viewport: " + displayedInViewport2) // outputs: true
    await EnableDiscussionsbtn.click()
    await browser.pause(2000)

    const QuickstartTitle = await $("#title-h1")
    let displayed = await QuickstartTitle.isDisplayed()
    console.log("Is displayed: " + displayed) // outputs: true
    await expect(QuickstartTitle).toHaveText("Quickstart for GitHub Discussions")

});
});