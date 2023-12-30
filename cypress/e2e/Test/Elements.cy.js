import ElementActions from "../../../pagesActions/elementsActions";
import Elements from "C:/Users/r2vm/OneDrive/Escritorio/All/Code/Codes/Cypress/demoqa/pageObjectsSelectors/elementsObjects";

 const actions = new ElementActions();
 const elem = new Elements();
 const h5 = "Following links will open new tab"
 const badRequestTex = "Link has responded with staus 400 and status text Bad Request"

describe('Visit demoQA', () => {
  beforeEach(() => {
    cy.visit('/')
    actions.clickElements();
  })

  it('Go to checkbox', () => {
    actions.goToCheckBox();
    elem.element.homeTitle().should("contain", "Home");
  })

  it('Click home checkbox', () => {
      actions.clickHomeCheckBox();
      elem.element.homeText().should("contain", "You have selected");
      actions.unclickHomeCheckBox();
    })

  it('Click desktop checkbox', () => {
      actions.clickDesktopCheckBox();
      elem.element.desktopText().should("contain", "desktop");
    })

  it('Go to Web Tables', () => {
      actions.goToWebTables();
      elem.element.firstNameHeader().should("exist");
    })

  it('Making a search', () => {
      actions.goToWebTables();
      actions.searching("Vega");
      elem.element.lastNameSecondCollum().should("not.have.text");
    })

  it('Go to Buttons', () => {
      actions.goToButtons();
      elem.element.doubleClickMeBtn().should("be.visible");
    })

  it('Double clicking', () => {
      actions.goToButtons();
      actions.dubleClick();
      elem.element.doubleClickMessage().should("match", "#doubleClickMessage");
    })

  it('Go to Links', () => {
      actions.goToLinks();
      elem.element.linksH5().should("have.text", h5);
    })

  it('Bad request', () => {
      actions.goToLinks();
      actions.clickBadRquestBtn();
      elem.element.badRequestMessage().should("contain", "400")
      .request({
        url: 'https://demoqa.com/__/#/specs/runner?file=cypress/e2e/Test/Elements.cy.js',
        failOnStatusCode:false,
    }).then((resp) => {
        expect(resp.status).to.eq(200)
    })
    })

  it('Go to Broken Link - Images', () => {
      actions.goToBrokenLinksImages();
      elem.element.brokenImageP().should("contain", "Broken image");
    })

  it('Go to Upload and Download', () => {
      actions.goToUploadDownload();
    })

  it('Go to Dynamic Properties', () => {
      actions.goToDynamicProperties();
    })

  })
