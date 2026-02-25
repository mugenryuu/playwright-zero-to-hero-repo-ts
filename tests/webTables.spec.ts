import {expect, test } from '@playwright/test'

test('web tables', async({page}) => {
    const email = page.locator('input-editor').getByPlaceholder('E-mail');
    await page.goto('/pages/tables/smart-table')

    await page.getByRole('row', {name: 'fat@yandex.ru'}).locator('.nb-edit').click();
    await email.clear()
    await email.fill('change@address.com')
})