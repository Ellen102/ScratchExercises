module.paths.push('C:\\Users\\Ellen\\AppData\\Roaming\\npm\\node_modules');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('file://C:/Users/Ellen/Documents/0 ugent/Thesis/github off/ScratchExercises/web/test.html')
  await page.pdf({ path: 'book/test.pdf', format: 'A4' })
  await browser.close()
})()