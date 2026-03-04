import { test } from '@playwright/test'

test('web tables', async ({ page }) => {
    const newAddress = 'change@address.com';
    const email = page.locator('input-editor').getByPlaceholder('E-mail');
    const targetRow = page.getByRole('row', { name: 'fat@yandex.ru' });
    const changedRow = page.getByRole('row', { name: newAddress });

    //1 change e-mail address of specific row
    await page.goto('/');
    await page.getByRole('link', { name: 'Tables & Data' }).click();
    await page.getByRole('link', { name: 'Smart Table' }).click();

    await targetRow.locator('.nb-edit').click();
    await email.fill(newAddress);
    await changedRow.locator('.nb-checkmark').click();

    
})

test('web tables 2', async({page}) => {
    //2 get the row based on the value in the specific column
    await page.goto('/');
    await page.getByRole('link', { name: 'Tables & Data' }).click();
    await page.getByRole('link', { name: 'Smart Table' }).click();

    await page.getByRole('link', {name: '2'}).click();
    await page.getByRole('cell', {name: '11'}).first().click();
})