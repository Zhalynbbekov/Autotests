class BlackListPage {
    get filterField () { return $('input[name="search"]') };
    get blackListField () {return $('[class="options-wrap blackList"]')}
    get optionBlackList () {return $('[class="option ng-star-inserted"]')}
    get searchButton () {return $('[class="bold mad-button"]')}

    async openfilter(){
        await this.filterField.click();
    }

    async selectOption(){
        await this.blackListField.click();
        await this.optionBlackList.click();
        await this.blackListField.click();
    }
    async search(){
        await this.searchButton.click();
    }
}
module.exports = new BlackListPage();