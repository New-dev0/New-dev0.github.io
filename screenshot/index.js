const puppeteer = require("puppeteer");

(async () => {
    var browser = await puppeteer.launch();
    var page = await browser.newPage();
    await page.goto("https://newdev0.in");
    new Promise(resolve => {setTimeout(resolve, 100)});
    await page.screenshot({path: "../ss.png", fullPage: true});
    console.log("Saved");
})();