import { Page } from '@playwright/test'
import { HelperBase } from './HelperBase';

export class FormLayoutsPage extends HelperBase{

    constructor(page: Page) {
        super(page)
    }

    async submitUsingTheGridForm(email: string, password: string, option: string) {
        const usingTheGridsForm = this.page.locator('nb-card', { hasText: "Using the Grid" })

        await usingTheGridsForm.getByPlaceholder('Email').fill(email);
        await usingTheGridsForm.getByPlaceholder('Password').fill(password);
        await usingTheGridsForm.getByRole('radio', { name: option }).check({ force: true });
        await usingTheGridsForm.getByRole('button', { name: 'Sign in' }).click();
        await this.waitForNumberOfSeconds(2);
    }

    async submitUsingTheInlineForm(name: string, email: string) {
        const usingTheInlineForm = this.page.locator('nb-card', { hasText: "Inline form" })
        const toggleRememberMe = usingTheInlineForm.getByRole('checkbox', { name: 'Remember me' })

        await usingTheInlineForm.getByPlaceholder('Jane Doe').fill('Ryu Yamazaki');
        await usingTheInlineForm.getByPlaceholder('Email').fill('rfyamazaki@outlook.com');
        if((await toggleRememberMe.isChecked()) === false) {
            await toggleRememberMe.check({ force: true });
        }
        await usingTheInlineForm.getByRole('button', { name: 'Submit' }).click();
        await this.waitForNumberOfSeconds(2);
    }
}