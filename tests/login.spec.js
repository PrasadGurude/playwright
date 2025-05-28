const {test , expect} = require('@playwright/test');


test("valid login", async function ({page}){
    await page.goto('https://www.saucedemo.com/');
    await page.waitForTimeout(5000)
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.locator('#login-button').click();
    await page.waitForTimeout(5000)
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

})

test("invalid login", async function ({page}){
    await page.goto('https://www.saucedemo.com/');
    await page.waitForTimeout(5000)
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('wrong_password');
    await page.locator('#login-button').click();
    await page.waitForTimeout(5000)
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    const errorMessage = await page.locator('.error-message-container.error').textContent();
    expect(errorMessage).toContain('Epic sadface: Username and password do not match any user in this service');
})

test('logout',async function({page}){
    await page.goto('https://www.saucedemo.com/');
    await page.waitForTimeout(5000)
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.locator('#login-button').click();
    await page.waitForTimeout(5000)
    
    // Click on the menu button
    await page.locator('.bm-burger-button').click();
    
    // Click on the logout button
    await page.locator('#logout_sidebar_link').click();
    
    // Verify that the user is redirected to the login page
    await expect(page).toHaveURL('https://www.saucedemo.com/');
})