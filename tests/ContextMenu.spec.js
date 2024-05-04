import{test, expect } from '@playwright/test';

test ('Context Menu', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/context_menu');
    const hotspot=  page.locator('#hot-spot');
    await hotspot.click({button:'right'});
});