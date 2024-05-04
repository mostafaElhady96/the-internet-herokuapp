import {test,expect} from '@playwright/test'

test ('file uploader', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload');
    const choosefile = page.locator('#file-upload');
    await choosefile.setInputFiles('C:/Users/HP/OneDrive/Desktop/Instagram.lnk');
    await page.locator('#file-submit').click();

    await expect(page.url()).toBe('https://the-internet.herokuapp.com/upload');



})