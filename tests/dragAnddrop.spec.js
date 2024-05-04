import {test, expect} from '@playwright/test';

test('drag and drop ' , async({page})=>{
   
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
    
    const elementA = page.locator('#column-a');
    const elementB = page .locator('#column-b');

     await elementA.dragTo(elementB);
     await elementB.dragTo(elementA);
});