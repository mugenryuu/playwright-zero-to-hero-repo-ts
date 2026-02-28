import { test } from '@playwright/test'
import { NavigationPage } from '../page-objects/NavigationPage.spec';
import { FormLayoutsPage } from '../page-objects/FormLayoutsPage.spec';

test.beforeEach(async ({ page }) => {
    await page.goto('/');
})

test(`Populate 'Using the Grid' form`, async ({ page }) => {
    const navigateTo = new NavigationPage(page);
    const formLayoutsPage = new FormLayoutsPage(page);

    await navigateTo.formLayoutsPageNavigation();
    await formLayoutsPage.submitUsingTheGridForm('rfyamazaki@outlook.com','password','Option')
    
})

test(`Populate 'Inline' form`, async ({ page }) => {
    const navigateTo = new NavigationPage(page);
    const formLayoutsPage = new FormLayoutsPage(page);

    await navigateTo.formLayoutsPageNavigation();
    await formLayoutsPage.submitUsingTheInlineForm('Ryu Yamazaki', 'rfyamazaki@outlook.com')
})