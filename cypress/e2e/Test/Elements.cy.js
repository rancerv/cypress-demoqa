import ElementActions from "../../../pagesActions/elementsActions";
import Elements from "../../../pageElements/elementsElements";
import data from "../../../data.json";

const actions = new ElementActions();
const elem = new Elements();

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
      elem.element.linksH5().should("have.text", data.h5);
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
