import {By} from "selenium-webdriver"
import {BasePage} from './basePage'

export class ShanieshaPage extends BasePage {
    galaxyPhone: By=By.xpath('(//div[@class ="card-block"])[1]')
addcart: By=By.xpath('//a[text()="Add to cart"]')
cart: By=By.xpath('//a[@id ="cartur"]')
placeOrder: By=By.xpath('(//button[@class ="btn btn-success"])[1]')
    constructor (){
        super({url:"https://demoblaze.com/"})
    }
}