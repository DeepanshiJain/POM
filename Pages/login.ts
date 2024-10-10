import {test,expect, Page} from '@playwright/test'

export default class LoginPage{

    constructor (public page){
        this.page=page;
    }

    async basePage()
    {
        await this.page.goto("https://www.amazon.in/");
        await this.page.locator("#nav-link-accountList-nav-line-1").click();
    }

    async login(email: string, password: string) {
        await this.page.locator("#ap_email").fill(email);
        await this.page.locator("input#continue").click();
        await this.page.locator("#ap_password").fill(password);
        await this.page.locator("#signInSubmit").click();
    }
        
  }