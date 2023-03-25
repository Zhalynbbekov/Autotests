class EditClientsPage {
    get cardNo () { return $('[formcontrolname="cardNo"]') };
    get cardNo2 () { return $('[id="mat-input-6"]') };
    get physicalCardField () { return $('.client-data:nth-child(2) span[class="editIcon"]') };
    get dialogButtonSave () { return $('.mat-raised-button:nth-child(2)') };
    get discountCardField () { return $('.client-data:nth-child(3) span[class="editIcon"]') };
    get changeUserName () { return $('[id="mat-input-1"]') };
    get changeUserSurname () { return $('[id="mat-input-2"]') };
    get changeUserPatronymic () { return $('[id="mat-input-3"]') };
    get contactIcon () { return $('div[class="col-item tel"] span[class="editIcon"]') };
    get phoneField () { return $('input[formcontrolname="phone"]') };
    get emailField () { return $('input[formcontrolname="email"]') };
    get saveButton () { return $('button[name="save"]') }
    get closeButton () { return $('[class="close"]') }

    async open(){
        await $('tr[class="crm-navigator-table__row ng-star-inserted"]').click();
        await browser.pause(5000);
    }

    async editClient(physicalCard, discountCard, username, surname, patronymic, phone, email){
        await this.physicalCardField.click();
        await this.cardNo.setValue(physicalCard);
        await this.dialogButtonSave.click();
        await this.discountCardField.click();
        await this.cardNo2.setValue(discountCard);
        await this.dialogButtonSave.click();
        await this.changeUserName.clearValue();
        await this.changeUserName.setValue(username);
        await this.changeUserSurname.clearValue();
        await this.changeUserSurname.setValue(surname);
        await this.changeUserPatronymic.clearValue();
        await this.changeUserPatronymic.setValue(patronymic);
        await this.contactIcon.click();
        await this.phoneField.setValue(phone);
        await this.emailField.setValue(email);
        await this.dialogButtonSave.click();
        await this.saveButton.click();
        await browser.pause(5000);
        await this.closeButton.click();
        await browser.pause(5000);
        await expect(browser).toHaveUrlContaining('clients');
    }
}

module.exports = new EditClientsPage();