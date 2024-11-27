class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericIdField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            firstComboBox: ".oxd-select-text-input",
            secondComboBox: ".oxd-select-dropdown > :nth-child(27) > span",
            thirdComboBox: ".oxd-select-dropdown > :nth-child(2)"
        };
        return selectors;
    }

    fillPersonalDetails(firstName, lastName, employee, otherId, driveLicense) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName);
        cy.get(this.selectorsList().lastNameField).clear().type(lastName);
        cy.get(this.selectorsList().genericIdField).eq(3).clear().type(employee);
        cy.get(this.selectorsList().genericIdField).eq(4).clear().type(otherId);
        cy.get(this.selectorsList().genericIdField).eq(5).clear().type(driveLicense);
    }

    fillDateDetails() {
        cy.get(this.selectorsList().dateField).eq(0).clear().type('2024-01-01');
        cy.get(this.selectorsList().dateCloseButton).click();
        cy.get(this.selectorsList().dateField).eq(1).clear().type('2024-01-01');
        cy.get(this.selectorsList().dateCloseButton).click();
    }

    fillDateDetails2() {
        cy.get(this.selectorsList().firstComboBox).eq(0).click();
        cy.get(this.selectorsList().secondComboBox).click();
        cy.get(this.selectorsList().firstComboBox).eq(1).click();
        cy.get(this.selectorsList().thirdComboBox).click();
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click();
        cy.get('body').should('contain', 'Successfully Updated');
    }
}

export default MyInfoPage;
