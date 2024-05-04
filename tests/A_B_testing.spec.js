import{test ,expect } from '@playwright/test';


test('A_B_testing', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', {name:'A/B Testing'}).click();
    await expect(page.url()).toBe('https://the-internet.herokuapp.com/abtest');
});
