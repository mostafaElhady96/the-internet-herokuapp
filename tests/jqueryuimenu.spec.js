import {test,expect} from '@playwright/test';

test('jqueryui menu ', async({page})=>{
     await page.goto('https://the-internet.herokuapp.com/jqueryui/menu');
     const enabled = page.getByRole('link',{name:'Enabled'})
     await enabled.hover();
     const downloads = page.getByRole('link',{name:'Downloads'})
     await downloads.hover();
     const pdf= page.getByRole('link',{name:'PDF'});
     await pdf.click();

  
})