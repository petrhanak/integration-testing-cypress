// @fixme add correct redux store import here
// import reduxStore from 'global/store'
//
// Cypress.Commands.add('selectState', selector =>
//   cy.wrap(selector(reduxStore.getState())),
// )

Cypress.Commands.add('cmp', testComponentName =>
  cy.get(`[data-id="${testComponentName}"]`),
)
