import userData from '../fixtures/users/user-Data.json'; 
import LoginPage from '../pages/LoginPage'; 
import DashboardPage from '../pages/DashboardPage';
import MenuPage from '../pages/menuPage';
import MyInfoPage from '../pages/myInfoPage';

const Chance = require ('chance');

const chance = new Chance();
const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();

describe('Orange HRM Tests', () => {

  it('User info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.userName, userData.userSuccess.password)

    dashboardPage.checkDashBoardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.word(), chance.word(), chance.bb_pin())
    myInfoPage.fillDateDetails()
    myInfoPage.fillDateDetails2()
    myInfoPage.saveForm()

  });
  
})