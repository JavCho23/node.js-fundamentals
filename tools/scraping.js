const puppeteer = require("puppeteer")

async function getPageTitle(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    const title = await page.evaluate(() => {
        const pageTitle = document.querySelector("h1")
        return pageTitle.innerHTML
    })
    browser.close()
    console.log(title)
}

getPageTitle("https://platzi.com/")
