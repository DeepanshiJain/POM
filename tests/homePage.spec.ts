import {expect, test} from '@playwright/test';
import  LoginPage  from '../Pages/login';

test.beforeEach('Verifying Login',async({page})=>{
    await page.goto("https://www.amazon.in/");
});

test('Verifying logged in user',async({page})=>{
    await page.goto("https://www.amazon.in/");
    const user=await page.locator("#nav-link-accountList-nav-line-1").textContent();
    await expect(user).not.toContain('Sign In');
});

test("",async({page})=>{
    await expect (page.getByLabel('Amazon.in', { exact: true })).toBeVisible();

    //search in searchbar
    await page.getByPlaceholder('Search Amazon.in').fill("Redmi");
    await page.getByRole('button', { name: 'Go',exact:true }).click();

    //add item in cart
    await page.locator('#a-autoid-1-announce').click();
})