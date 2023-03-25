const LoginPage = require( "../pageobjects/LoginPage");
const BlackListPage = require( "../pageobjects/BlackListPage");
describe('Clients Suit', ()=> {
    beforeEach( async() => {
        await LoginPage.open();
        await LoginPage.doLogin('Admin', 'Admin@Navi');
    })
    it('Black list select', async ()=> {
        await BlackListPage.openfilter();
        await browser.pause(5000);
        await BlackListPage.selectOption();
        await browser.pause(5000);
        await BlackListPage.search();
        await browser.pause(5000);
    })
})

