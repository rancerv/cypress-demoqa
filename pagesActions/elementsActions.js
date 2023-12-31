import Elements from "../pageElements/elementsElements.js"
import Methods from "C:/Users/r2vm/OneDrive/Escritorio/All/Code/Codes/Cypress/demoqa/Utils/generalMethods"


const elem = new Elements();
const methods = new Methods();

class ElementActions {

    clickElements(){
        methods.clicking(elem.element.elementsBtn());
    }
    
    goToCheckBox(){
        methods.clicking(elem.element.checkBoxBtn());
    }
    
    clickHomeCheckBox(){
        methods.clicking(elem.element.checkBoxBtn());
        methods.clicking(elem.element.homeCheckBox()); 
    }
    
    unclickHomeCheckBox(){
        methods.clicking(elem.element.homeCheckBox());
    }
    
    clickDesktopCheckBox(){
        methods.clicking(elem.element.checkBoxBtn());
        methods.clicking(elem.element.checkboxDropd());
        methods.clicking(elem.element.desktopCheckBox()); 
    }
    
    goToRadioButton(){
        methods.clicking(elem.element.radioButtonBtn());
    }
    
    goToWebTables(){
        methods.clicking(elem.element.webTablesBtn());
    }
    
    searching(item){
        elem.element.searchBar().type(item);
        methods.clicking(elem.element.searchButton());
    }
    
    goToButtons(){
        methods.clicking(elem.element.buttonsBtn());
    }
    
    dubleClick(){
        methods.doubleClick(elem.element.doubleClickMeBtn());
    }
    
    goToLinks(){
        methods.clicking(elem.element.linksBtn());
    }
    
    clickBadRquestBtn(){
        methods.clicking(elem.element.badRequestBtn());
    }
    
    goToBrokenLinksImages(){
        methods.clicking(elem.element.brokenLinksImagesBtn());
    }
    
    goToUploadDownload(){
        methods.clicking(elem.element.uploadDownloadBtn());
    }
    
    goToDynamicProperties(){
        methods.clicking(elem.element.dynamicPropertiesBtn());
    }
}



module.exports = ElementActions

