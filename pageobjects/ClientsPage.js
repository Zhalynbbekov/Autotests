class ClientsPage {
    get surnameField () { return $('input[formcontrolname="userSurname"]') };
    get username () { return $( 'input[formcontrolname="userName"]') };
    get maleOptionRadio () { return $('mat-radio-group mat-radio-button:nth-child(1) div[class="mat-radio-label-content"]') };
    get emailField () { return $('input[formcontrolname="email"]') };
    get phoneNumber () { return $('input[formcontrolname="phone"]') };
    get datebirth () { return $('input[formcontrolname="birthday"]') };
    get saveButton () { return $('button[name="save"]') }

    async open(){
        await $('button.clients-add-user-dialog').click();
        await browser.pause(5000);

        const userForm = await $('div.add-user-modal form');
        await expect(userForm).toExist();
    }

    async doCreate(surname, username, emailField, phoneNumber, datebirth){
        await this.surnameField.setValue(surname);
        await this.username.setValue(username);
        await this.maleOptionRadio.click();
        await this.emailField.setValue(emailField);
        await this.phoneNumber.setValue(phoneNumber);
        await this.datebirth.setValue(datebirth);
        await this.saveButton.click();
        await browser.pause(5000);
        await expect(browser).toHaveUrlContaining('clients');
    }
}

module.exports = new ClientsPage();