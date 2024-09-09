const  {chromium} = require('@playwright/test');

//Asynch
(async() => {
    //Creating the browser instance
    const browser = await chromium.launch({
    headless : false
    });

    const browserInstance =await browser.newContext();

    const page =await browserInstance.newPage();

    await page.goto("https://google.com");
    
    await browser.close();
})();
