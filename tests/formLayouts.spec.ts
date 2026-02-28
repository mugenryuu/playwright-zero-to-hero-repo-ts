import { test } from '@playwright/test'
import { PageManager } from '../page-objects/PageManager.spec';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
})

test(`Populate 'Using the Grid' form`, async ({ page }) => {
    const pm = new PageManager(page)

    await pm.navigateTo().formLayoutsPage();
    await pm.onFormLayoutsPage().submitUsingTheGridForm('rfyamazaki@outlook.com', 'password', 'Option')
})

test(`Populate 'Inline' form`, async ({ page }) => {
    const pm = new PageManager(page)

    await pm.navigateTo().formLayoutsPage();
    await pm.onFormLayoutsPage().submitUsingTheInlineForm('Ryu Yamazaki', 'rfyamazaki@outlook.com')
})