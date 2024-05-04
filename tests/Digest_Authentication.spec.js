import {test , expect } from '@playwright/test';

test('Digest Authentication', async({page})=>{
await page.goto('https://the-internet.herokuapp.com/');
await page.getByRole('link', {name: 'Digest Authentication'}).click();

page.on('dialog', async (dialog)=>{
     dialog.type('admin:admin')
});
});