import {test, expect} from '@playwright/test';

test('multiple windows', async ({page,context}) => {
    await page.goto('https://the-internet.herokuapp.com/windows');
    await page.getByRole('link', {name: 'Click Here'}).click();

    const newtab =  await context.newPage();
    await newtab.goto('https://the-internet.herokuapp.com/');
     
    await page.bringToFront();
    await newtab.bringToFront();

    const allpages = await context.pages();
   
    await newtab.close();
});


test('multiple windows in internet herkuapp only', async({page,context})=>{
    await page.goto('https://the-internet.herokuapp.com/windows');
    await page.getByRole('link', {name: 'Click Here'}).click();

    await page.bringToFront();
});