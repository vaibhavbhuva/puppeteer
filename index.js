const puppeteer = require('puppeteer');
const fs = require('fs');
const _ = require('lodash');

(async () => {
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
  let htmlContent = fs.readFileSync('index.html');
  htmlContent = _.toString(htmlContent);
  await page.setContent(htmlContent, {
    waitUntil: 'networkidle0'
  });

  let name = 'Hello World!';
  await page.type('input[ng-model=name]', name, { delay: 50 });
  await page.click('input[ng-model=name]');
  // await page.close();
  // await browser.close();
})();
