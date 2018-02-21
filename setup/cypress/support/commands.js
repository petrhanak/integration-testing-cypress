const storeKey = 'reduxStore'

// Use reselect selector on state
Cypress.Commands.add('selectState', selector =>
  cy.window().then(win => selector(win[storeKey].getState())),
)

// Get redux state
Cypress.Commands.add('getState', () =>
  cy.window().then(win => win[storeKey].getState()),
)

// Select DOM element by data-id attribute
Cypress.Commands.add('cmp', testComponentName =>
  cy.get(`[data-id="${testComponentName}"]`),
)

// Select DOM element by styled-component's class
Cypress.Commands.add('sc', styledComponent =>
  cy.get(`.${styledComponent.styledComponentId}`),
)
