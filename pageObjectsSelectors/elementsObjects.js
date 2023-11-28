class Elements {

    element ={
        elementsBtn : () => cy.get(":nth-child(1) > :nth-child(1) > .card-body"),
        checkBoxBtn : () => cy.get(":nth-child(1) > .element-list > .menu-list > #item-1"),
        radioButtonBtn : () => cy.get(":nth-child(1) > .element-list > .menu-list > #item-2"),
        webTablesBtn : () => cy.get(":nth-child(1) > .element-list > .menu-list > #item-3"),
        buttonsBtn : () => cy.get(":nth-child(1) > .element-list > .menu-list > #item-4"),
        linksBtn : () => cy.get(":nth-child(1) > .element-list > .menu-list > #item-5"),
        brokenLinksImagesBtn : () => cy.get(":nth-child(1) > .element-list > .menu-list > #item-6"),
        uploadDownloadBtn : () => cy.get(":nth-child(1) > .element-list > .menu-list > #item-7"),
        dynamicPropertiesBtn : () => cy.get(":nth-child(1) > .element-list > .menu-list > #item-8"),
    }
    
    clickElements(){
        this.element.elementsBtn().click();
    }

    goToCheckBox(){
        this.element.checkBoxBtn().click();
    }

    goToRadioButton(){
        this.element.radioButtonBtn().click();
    }

    goToWebTables(){
        this.element.webTablesBtn().click();
    }

    goToButtons(){
        this.element.buttonsBtn().click();
    }

    goToLinks(){
        this.element.linksBtn().click();
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