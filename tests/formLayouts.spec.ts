import { test } from '@playwright/test'
import { PageManager } from '../page-objects/PageManager';
import { faker } from '@faker-js/faker'
import user from '../test-data/user.json'

test.beforeEach(async ({ page }) => {
    await page.goto('/');
})

test(`Populate 'Using the Grid' form`, async ({ page }) => {
    const pm = new PageManager(page)
    
    await pm.navigateTo.formLayoutsPage();
    await pm.onFormLayoutsPage.submitUsingTheGridForm(user.validUser.email, user.validUser.password, user.validUser.option)
    await page.screenshot({path: 'screenshots/submitUsingTheGridForm.png'})
})

test(`Populate 'Inline' form`, async ({ page }) => {
    const pm = new PageManager(page)
    
    await pm.navigateTo.formLayoutsPage();
    await pm.onFormLayoutsPage.submitUsingTheInlineForm(user.validUser.name, user.validUser.email)
    await page.screenshot({path: 'screenshots/submitUsingTheInlineForm.png'})
})

test('Populate forms using Faker', async ({ page }) => {
    const pm = new PageManager(page)
    const randomFullName = faker.person.fullName();
    const randomEmail = `${randomFullName.replaceAll(/\s/g, '')}@test.com`;
    
    await pm.navigateTo.formLayoutsPage();
    await pm.onFormLayoutsPage.submitUsingTheInlineForm(randomFullName, randomEmail)
    await pm.onFormLayoutsPage.submitUsingTheGridForm(randomEmail, user.validUser.password, user.validUser.option)
    await page.screenshot({path: 'screenshots/submitUsingGridAndInlineFormUsingFaker.png'})
})