const {test , expect} = require('@playwright/test');

test("Google Search Test", async function ({page}) {
    // Navigate to Google
    await page.goto('https://www.google.com');

   const url = page.url();

   console.log("Current URL:", url);

   const title = await page.title();

   expect(page).toHaveTitle('Google');
   console.log("Page Title:", title);

    await expect(page).toHaveTitle('Google')

})