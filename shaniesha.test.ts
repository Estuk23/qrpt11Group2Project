import { ShanieshaPage } from "./shanieshaPage";
const shaniesha = new ShanieshaPage()
const fs = require ('fs')

describe ('testing demoblaze', () => {
    test("testing checkout",async () => {
     await shaniesha.navigate()
     await shaniesha.cancelIdleCallback(shaniesha.galaxyPhone)
await shaniesha.cancelIdleCallback(shaniesha.addcart)
await shaniesha.driver.sleep(300)
await shaniesha.driver.switchTo().alert().accept()
await shaniesha.cancelIdleCallback(shaniesha.cart)
await shaniesha.cancelIdleCallback(shaniesha.placeOrder) 
await shaniesha.driver.sleep(300)    
     fs.writeFile(`${__dirname}/checkoutshot.png`,
     await shaniesha.driver.takeScreenshot(), "base64",
     (e) => {
        if (e) console.log(e)
        else console.log("picturesaved")
     })
    })
    test("no checkout summary",async () => {
        await shaniesha.navigate()
        await shaniesha.cancelIdleCallback(shaniesha.galaxyPhone)
    await shaniesha.cancelIdleCallback (shaniesha.addcart)
    await shaniesha.driver.sleep(300)
    await shaniesha.driver.switchTo().alert().accept()
    await shaniesha.cancelIdleCallback(shaniesha.cart)
    fs.writeFile(`${__dirname}/nocartscreenshot.png`,
     await shaniesha.driver.takeScreenshot(), "base64",
     (e) => {
        if (e) console.log(e)
        else console.log("picturesaved")
     })
     await shaniesha.driver.quit()
    })
})