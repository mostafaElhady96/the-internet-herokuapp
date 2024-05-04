import {test , expect } from '@playwright/test';

test ( 'Checkboxes', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link',{name:'Checkboxes'}).click();

    const checkbox1 = page.getByRole('checkbox').first();
    const checkbox2 = page.getByRole('checkbox').nth(1);

    await checkbox1.check();
    await checkbox2.uncheck();
})