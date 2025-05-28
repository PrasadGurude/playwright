const {test , expect} = require('@playwright/test');

// test.use({viewport:{width:500,height:1000}})

test('Verify error messages for invalid inputs', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    console.log(page.viewportSize().width)
    console.log(page.viewportSize().height)
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('wrong_password');
    await page.locator("//button[normalize-space()='Login']").click();
    const errorMessage = await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").textContent();
    console.log("Error message is "+errorMessage);
    expect(errorMessage.includes("Invalid")).toBeTruthy()
    expect(errorMessage==="Invalid credentials").toBeTruthy()
}) 