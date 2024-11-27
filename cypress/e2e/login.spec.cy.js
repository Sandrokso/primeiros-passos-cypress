import userData from '../fixtures/users/user-Data.json'; 
import LoginPage from '../pages/LoginPage'; 
import DashboardPage from '../pages/DashboardPage';

const Chance = require ('chance');

const chance = new Chance();
const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();


describe('login Orange HRM Tests', () => {

  it('Login - fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.userName, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })

  it.only('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.userName, userData.userSuccess.password)
    dashboardPage.checkDashBoardPage()
  })
  
})