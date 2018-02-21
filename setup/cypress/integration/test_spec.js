import cmpId from 'examples/app/componentIds'


describe('Test', () => {

  it('should do some stuff', () => {

    // set different viewport than default
    cy.viewport('iphone-6')

    // visit homepage
    cy.visit('/')


    // select styled component ListComponent
    cy.sc(ListComponent)
    // do some checks
      .should('be.visible')
      .contains('some text')

    // select component by data-id
    cy.cmp(cmpId.loginButton)
    // perform mouse action
      .click()

    // custom wrapper for selecting redux state
    cy.selectState(selectIsLoggedIn)
      .should('eq', false)

    // select state for immutable without reseelct
    cy.getState()
    // calls .getIn(['language, 'locale'])
      .invoke('getIn', ['language', 'locale'])
      .should('eq', 'de')

    // execute global command
    // must be wrapped in cy.window() otherwise it would be invoked immediately
    cy.window().then((win) => {
      const accessToken = win.localStorage.getItem('ACCESS_TOKEN')

      // put anything in wrap and then perform checks - dom visibility, assert checks
      cy.wrap(accessToken)
      // equality assert
        .eq(4)
    })


    // stub network requests
    cy.server()
    cy.route({
      method: 'GET',
      url: '/test',
      response: { message: 'custom response' },
      status: 404,
    })

    // IMPORTANT!!! fetch is not working with cy.server
    // disabling it will fall back to XHR and fix this issue
    cy.visit('/', {
      onBeforeLoad: (win) => {
        win.fetch = null
      }
    })

    cy.get('.someButtonDoingNetworkRequest')
      .click()

    // check successfull response
    cy.get('.list of responses')
      .contains('some text')

    // or check failed request
    cy.get('.list of responses')
      .contains('Something went wrong!')
  })
})
