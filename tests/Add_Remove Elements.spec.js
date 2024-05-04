import{test, expect } from '@playwright/test';

test('Add/Remove Elements', async({page})=>{
await page.goto('https://the-internet.herokuapp.com/');
await page.getByRole('link',{name:'Add/Remove Elements'}).click();
await expect(page.url()).toBe('https://the-internet.herokuapp.com/add_remove_elements/');

const addelementbutton = page.getByRole('button',{name:'Add Element'});
const deleteelementbutton =page.getByRole('button',{name:'Delete'});

await addelementbutton.click();
await deleteelementbutton.click();

const numberofclicks= 5;
for(let i =0;i<numberofclicks;i++){
  await  addelementbutton.click();
  await deleteelementbutton.click();
}


});