import { Browser, chromium, test as setup} from '@playwright/test';
import { testPages} from './Fixtures/fixture'
import * as data from './users.json'
import  LoginPage  from './Pages/login';

async function globalSetup() {
    const broswer:Browser =await chromium.launch({headless:false});
    const context=await broswer.newContext();
    const page = await context.newPage();
    await page.goto("https://www.amazon.in/");
    await page.locator("#nav-link-accountList-nav-line-1").click();
    await page.locator("#ap_email").fill(data.username);
    await page.locator("input#continue").click();
    await page.locator("#ap_password").fill(data.password);
    await page.locator("#signInSubmit").click();
}

export default globalSetup