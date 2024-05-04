import{test,expect} from '@playwright/test';

test('Basic Auth', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/');
    await page.getByRole('link', {name:'Basic Auth'}).click();


   
    
    page.on('dialog',async (dialog)=>{
        await console.log('dialog message', dialog.message());
        await dialog.accept('mostafa:elhady');
    });


    console.log('happy testing');

});