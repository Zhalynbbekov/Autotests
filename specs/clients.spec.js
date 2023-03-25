const LoginPage = require( "../pageobjects/LoginPage");
const ClientsPage = require( "../pageobjects/ClientsPage");
const EditClientsPage = require( "../pageobjects/EditClientsPage");
const SearchClients = require( "../pageobjects/SearchPage");
const EditSearchClients = require( "../pageobjects/EditSearchPage");


describe('Clients Suit', ()=> {
    beforeEach( async() => {
        await LoginPage.open();
        await LoginPage.doLogin('Admin', 'Admin@Navi');
    })

    afterEach( async()=>{
        await browser.reloadSession();
    })

    it('Create client', async ()=> {
        await ClientsPage.open();
        await ClientsPage.doCreate('Lionel', 'Pushka', 'pushka@gmail.com',
            '996772465075', '17.07.2002');

        await browser.acceptAlert();
        await browser.pause(5000);
    })

    xit('Check clients page', async() => {
            await $('tr[class="crm-navigator-table__row ng-star-inserted"]').click();
            await browser.pause(5000);
            await $('[class="close"]').click();
    })

    it("Edit Client",async ()=>{

        await EditClientsPage.open();
        await EditClientsPage.editClient(123456, 123456, "nono", "And",
            "yesyes", 996772455075, "nono@gmail.com");
        await browser.pause(5000);

    })

    it('Search page', async() => {

        await SearchClients.open();
        await SearchClients.searchClient();
        await browser.pause(5000);

        await EditSearchClients.open();
        await EditSearchClients.editSearchClient();
        await browser.pause(5000);
    })

})
