class MenuPage {
        selectorsList() {
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            AdminButton: "[href='/web/index.php/admin/viewAdminModule']",
            PimButton: "[href='/web/index.php/pim/viewPimModule']",
            LeaveButton: "[href='/web/index.php/leave/viewLeaveModule']",
            TimeButton: "[href='/web/index.php/time/viewTimeModule']",
            RecruitmentButton: "[href='/web/index.php/recruitment/viewRecruitmentModule']",
            PerformanceButton: "[href='/web/index.php/performance/viewPerformanceModule']",
            DirectoryButton: "[href='/web/index.php/directory/viewDirectory']",
            MaintenanceButton: "[href='/web/index.php/maintenance/viewMaintenanceModule']",
            ClaimButton: "[href='/web/index.php/maintenance/viewMaintenanceModule']",
            BuzzButton: "[href='/web/index.php/buzz/viewBuzz']",
        }

        return selectors

    }

    accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()

    }

    accessAdminPage() {
        cy.get(this.selectorsList().AdminButton).click()
    }

    accessPimPage() {
        cy.get(this.selectorsList().PimButton).click()
    }

    accessLeavePage() {
        cy.get(this.selectorsList().LeaveButton).click()
    }

    accessTimePage() {
        cy.get(this.selectorsList().TimeButton).click()
    }

    accessRecruitmentPage() {
        cy.get(this.selectorsList().RecruitmentButton).click()
    }

    accessPerformancePage() {
        cy.get(this.selectorsList().PerformanceButton).click()
    }

    accessDirectoryPage() {
        cy.get(this.selectorsList().DirectoryButton).click()
    }

    accessMaintenancePage() {
        cy.get(this.selectorsList().MaintenanceButton).click()
    }

    accessClaimPage() {
        cy.get(this.selectorsList().ClaimButton).click()
    }

    accessBuzzPage() {
        cy.get(this.selectorsList().BuzzButton).click()
    }

}

export default MenuPage