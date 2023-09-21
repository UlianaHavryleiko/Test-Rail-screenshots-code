import { expect } from '@wdio/globals'

describe("Test case 1", () => {

    it("should to see button", async () => {
    await browser.url('https://github.com/');
    await browser.pause(2000)
   
    const OpenSourceButton = await $('/html/body/div[1]/div[1]/header/div/div[2]/div/nav/ul/li[3]/button')
    await expect(OpenSourceButton).toHaveText("Open Source")
    await OpenSourceButton.click()

    const GitHubSponsorsbtn = await $('/html/body/div[1]/div[1]/header/div/div[2]/div/nav/ul/li[3]/div/div[1]/ul/li/a/div/div')
    await expect(GitHubSponsorsbtn).toHaveText("GitHub Sponsors")
    await GitHubSponsorsbtn.click()
    await browser.pause(2000)

    const SeeYoubtn = await $('/html/body/div[1]/div[4]/main/div/div[1]/div[2]/div/div/div[1]/a')
    let displayed = await SeeYoubtn.isDisplayed()
    console.log("Is displayed: " + displayed) // outputs: true
    await SeeYoubtn.click()
    await browser.pause(2000)

    await expect(browser).toHaveTitle('Explore GitHub Sponsors · GitHub')
    

});
});