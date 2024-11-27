import userData from '../fixtures/users/user-Data.json'; 
import LoginPage from '../pages/LoginPage'; 
import DashboardPage from '../pages/DashboardPage';
import MenuPage from '../pages/menuPage';

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();

describe('Orange HRM Tests', () => {

  const selectorsList = {

    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericIdField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    genericComboBox: ".oxd-select-text-input",
    secondComboBox: ".oxd-select-dropdown > :nth-child(27) > span",
    thirdComboBox: ".oxd-select-dropdown > :nth-child(2)"
  }

  it.only('User info Update - Success', () => {
    loginPage.accessLoginPage()

    loginPage.loginWithUser(userData.userSuccess.userName, userData.userSuccess.password)

    dashboardPage.checkDashBoardPage()

    menuPage.accessMyInfo()

    cy.get(selectorsList.firstNameField).clear().type('FirstName')
    cy.get(selectorsList.lastNameField).clear().type('LastName')
    cy.get(selectorsList.genericIdField).eq(3).clear().type('Employee')
    cy.get(selectorsList.genericIdField).eq(4).clear().type('OtherId')
    cy.get(selectorsList.genericIdField).eq(5).clear().type('DriveLicense')
    cy.get(selectorsList.dateField).eq(0).clear().type('2024-01-01')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.dateField).eq(1).clear().type('2024-01-01')
    cy.get(selectorsList.dateCloseButton).click()

    cy.get(selectorsList.genericComboBox).eq(0).click()
    cy.get(selectorsList.secondComboBox).click()
    cy.get(selectorsList.genericComboBox).eq(1).click()
    cy.get(selectorsList.thirdComboBox).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')

  })
  it('Login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.userName)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})