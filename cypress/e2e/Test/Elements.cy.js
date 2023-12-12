import Elements from "C:/Users/r2vm/OneDrive/Escritorio/All/Code/Codes/Cypress/demoqa/pageObjectsSelectors/elementsObjects.js"

 const elem = new Elements()
 const h5 = "Following links will open new tab"
 const badRequestTex = "Link has responded with staus 400 and status text Bad Request"

describe('Visit demoQA', () => {
  beforeEach(() => {
    cy.visit('/')
    elem.clickElements()
  })

  it('Go to checkbox', () => {
    elem.goToCheckBox()
    elem.element.homeTitle().should("contain", "Home")
  })

  it('Click home checkbox', () => {
      elem.clickHomeCheckBox()
      elem.element.homeText().should("contain", "You have selected")
      elem.unclickHomeCheckBox()
    })

  it('Click desktop checkbox', () => {
      elem.clickDesktopCheckBox()
      elem.element.desktopText().should("contain", "desktop")    
    })

  it('Go to Web Tables', () => {
      elem.goToWebTables()
      elem.element.firstNameHeader().should("exist")
    })

  it('Making a search', () => {
      elem.goToWebTables()
      elem.searching("Vega")
      elem.element.lastNameSecondCollum().should("not.have.text")
    })

  it('Go to Buttons', () => {
      elem.goToButtons()
      elem.element.doubleClickMeBtn().should("be.visible")
    })

  it('Double clicking', () => {
      elem.goToButtons()
      elem.dubleClick()
      elem.element.doubleClickMessage().should("match", "#doubleClickMessage")
    })

  it('Go to Links', () => {
      elem.goToLinks()
      elem.element.linksH5().should("have.text", h5)
    })

  it('Bad request', () => {
      elem.goToLinks()
      elem.clickBadRquestBtn()
      elem.element.badRequestMessage().should("contain", "400")
      .request({
        url: 'https://demoqa.com/__/#/specs/runner?file=cypress/e2e/Test/Elements.cy.js',
        failOnStatusCode:false,
    }).then((resp) => {
        expect(resp.status).to.eq(200)
    })
    })

  it('Go to Broken Link - Images', () => {
      elem.goToBrokenLinksImages()
      elem.element.brokenImageP().should("contain", "Broken image")
    })

  it('Go to Upload and Download', () => {
      elem.goToUploadDownload()
    })

  it('Go to Dynamic Properties', () => {
      elem.goToDynamicProperties()
    })

  })
