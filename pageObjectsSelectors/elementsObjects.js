class Elements {

    element ={
        elementsBtn : () => cy.get(":nth-child(1) > :nth-child(1) > .card-body"),
        checkBoxBtn : () => cy.get(":nth-child(1) > .element-list > .menu-list > #item-1"),
        homeTitle : () => cy.get(".rct-title"),
        checkboxDropd : () => cy.get(".rct-collapse"),
        homeCheckBox : () => cy.get(".rct-checkbox"),
        homeText : () => cy.get("#result"),
        desktopCheckBox : () => cy.get(".rct-node-expanded > ol > :nth-child(1) > .rct-text > label > .rct-checkbox"),
        desktopText : () => cy.get("#result > :nth-child(2)"),
        radioButtonBtn : () => cy.get(":nth-child(1) > .element-list > .menu-list > #item-2"),
        webTablesBtn : () => cy.get(":nth-child(1) > .element-list > .menu-list > #item-3"),
        firstNameHeader : () => cy.get(":nth-child(1) > .rt-resizable-header-content"),
        searchBar : () => cy.get("#searchBox"),
        searchButton : () => cy.get("#basic-addon2"),
        lastNameSecondCollum : () => cy.get(":nth-child(2) > .rt-tr > :nth-child(2)"),
        buttonsBtn : () => cy.get(":nth-child(1) > .element-list > .menu-list > #item-4"),
        doubleClickMeBtn : () => cy.get("#doubleClickBtn"),
        doubleClickMessage : () => cy.get("#doubleClickMessage"),
        linksBtn : () => cy.get(":nth-child(1) > .element-list > .menu-list > #item-5"),
        linksH5 : () => cy.get(":nth-child(1) > strong"),
        badRequestBtn : () => cy.get("#bad-request"),
        badRequestMessage : () => cy.get("#linkResponse > :nth-child(1)"),
        brokenLinksImagesBtn : () => cy.get(":nth-child(1) > .element-list > .menu-list > #item-6"),
        brokenImageP : () => cy.get(":nth-child(2) > :nth-child(5)"),
        uploadDownloadBtn : () => cy.get(":nth-child(1) > .element-list > .menu-list > #item-7"),
        dynamicPropertiesBtn : () => cy.get(":nth-child(1) > .element-list > .menu-list > #item-8"),
    }
    
    clickElements(){
        this.element.elementsBtn().click();
    }

    goToCheckBox(){
        this.element.checkBoxBtn().click();
    }

    clickHomeCheckBox(){
        this.element.checkBoxBtn().click();
        this.element.homeCheckBox().click(); 
    }

    unclickHomeCheckBox(){
        this.element.homeCheckBox().click();
    }

    clickDesktopCheckBox(){
        this.element.checkBoxBtn().click();
        this.element.checkboxDropd().click();
        this.element.desktopCheckBox().click(); 
    }

    goToRadioButton(){
        this.element.radioButtonBtn().click();
    }

    goToWebTables(){
        this.element.webTablesBtn().click();
    }

    searching(item){
        this.element.searchBar().type(item);
        this.element.searchButton().click();
    }

    goToButtons(){
        this.element.buttonsBtn().click();
    }

    dubleClick(){
        this.element.doubleClickMeBtn().dblclick();
    }

    goToLinks(){
        this.element.linksBtn().click();
    }

    clickBadRquestBtn(){
        this.element.badRequestBtn().click();
    }
    
    goToBrokenLinksImages(){
        this.element.brokenLinksImagesBtn().click();
    }

    goToUploadDownload(){
        this.element.uploadDownloadBtn().click();
    }

    goToDynamicProperties(){
        this.element.dynamicPropertiesBtn().click();
    }
}

module.exports = Elements