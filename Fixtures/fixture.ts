import { chromium, test as baseTest, BrowserContext,Page } from "@playwright/test";
import LoginPage from "../Pages/login";

type pages={
    context: BrowserContext;
   
}

export const testPages=baseTest.extend<pages>({
    context: async ({}, use) => {
        const browser = await chromium.launch();
        const context = await browser.newContext();
        await use(context);
        await context.close();
        await browser.close();
      },
}
);