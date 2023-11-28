import Elements from "C:/Users/r2vm/OneDrive/Escritorio/All/Code/Codes/Cypress/demoqa/pageObjectsSelectors/elementsObjects.js"

 const elem = new Elements()

describe('Visit demoQA', () => {
  beforeEach(() => {
    cy.visit('/')
    elem.clickElements()
  })

  it('Go to check box', () => {
      elem.goToCheckBox()
    })

  it('Go to Web Tables', () => {
      elem.goToWebTables()
    })

  it('Go to Buttons', () => {
      elem.goToButtons()
    })

  it('Go to Links', () => {
      elem.goToLinks()
    })

  it('Go to Broken Link - Images', () => {
      elem.goToBrokenLinksImages()
    })

  it('Go to Upload and Download', () => {
      elem.goToUploadDownload()
    })

  it('Go to Dynamic Properties', () => {
      elem.goToDynamicProperties()
    })

  })
