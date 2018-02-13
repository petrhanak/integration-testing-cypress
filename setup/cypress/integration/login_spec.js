import { selectLoggedIn } from 'data/user/selectors'
import cmpId from 'componentIds'


describe('Test', () => {

  it('should do some stuff', () => {

    // set different viewport than default
    cy.viewport('iphone-6')

    // visit homepage
    cy.visit('/')

    // select component
    cy.cmp(cmpId.loginButton)
    // do some checks
      .should('be.visible')
      // perform mouse action
      .click()

    // custom wrapper for selecting redux state
    cy.selectState(selectLoggedIn)
    // assert value check
      .should('eq', false)

    // execute global command
    // must be wrapped in cy.window() otherwise it would be invoked immediately
    cy.window().then((win) => {
      const accessToken = win.localStorage.getItem('ACCESS_TOKEN')

      // put anything in wrap and then perform checks - dom visibility, assert checks
      cy.wrap(accessToken)
      // equality assert
        .eq(4)
    })
  })
})
