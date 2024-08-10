const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://hoblist.com');

   
   await page.click('.MuiTypography-root jss288 MuiTypography-body1'); 
   await page.waitForSelector('.MuiButtonBase-root MuiListItem-root MuiMenuItem-root jss66 MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button');
 await page.click('.MuiButtonBase-root MuiListItem-root MuiMenuItem-root jss66 MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button');

  await browser.close();
})();
